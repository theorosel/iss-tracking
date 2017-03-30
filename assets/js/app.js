function App(element) {

    // DOM elements
    this.$el           = {};
    this.$el.container = element;
    this.$el.altitude  = this.$el.container.querySelector('.altitude');
    this.$el.speed     = this.$el.container.querySelector('.speed');
    this.$el.city_over = this.$el.container.querySelector('.city');
    this.$el.iss_btn   = this.$el.container.querySelector('.iss-button');
    this.$el.feed_link = this.$el.container.querySelector('.link-feed');
    this.$el.team_link = this.$el.container.querySelector('.link-team');
    this.$el.earth     = this.$el.container.querySelector('#earth');
    this.$el.markers   = null;

    // Earth data
    this.options = {
        atmosphere: false,
        center: [0, 0],
        zoom: 2.5,
        zooming:false,
        unconstrainedRotation:true,
        sky:true};

    this.earth = new WE.map('earth', this.options);

    // ISS data
    this.path      = [];
    this.ship_path = [];
    this.markers   = [];

    // Tweets
    this.latest_tweets = [];

    var self = this;

    /*
     * initialize()
     * Called when the DOM is fully loaded
     * Generate earth
     */
    this.initialize_earth = function() {
        WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
            minZoom: 0,
            maxZoom: 300,
            zooming: false,
            attribution: 'NASA'
        }).addTo(this.earth);
    }



    // Toggle feed & team layers
    this.$el.feed_link.addEventListener('click', function(event) {
        self.toggle_feed();
    });

    this.$el.team_link.addEventListener('click', function(event) {
        self.toggle_team();
    });

    // cropping the map on the ISS
    // this.$el.iss_btn.addEventListener('click', function(event) {
    //     self.get_iss_data();
    // });

    // cropping the map on user location
    // ... is coming


    setInterval(function(){
        self.update_iss_data();
    }, 3000);


    this.init = function() {
        this.initialize_earth();
        this.get_iss_data();
        this.get_latest_tweets().then(function(response) {

            for (var i = 0; i < self.latest_tweets.length - 1; i++) {

                self.get_tweet_pos(self.latest_tweets[i].tweet_date, i);
            }
        });
    }


    /*
     * get_latest_tweets()
     * Called when the DOM is fully loaded
     * Get X latest tweets with promise request to our local API : /api/twitter
     */
    this.get_latest_tweets = function() {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();

            req.open('GET', '/api/twitter');

            req.onload = function() {
                if (req.status == 200) {
                    resolve(req.response);

                    var results = JSON.parse(req.response);

                    for (var i = 0; i < results.length; i++) {
                        self.latest_tweets.push(results[i]);
                    }
                }
                else {
                    reject(Error(req.statusText));
                }
            };

            req.onerror = function() {
                reject(Error("Network Error"));
            };

            req.send();
        });
    }


    /*
     * get_tweet_pos()
     * Called in get_latest_tweets()
     * Get location of the tweet according to ISS location at the same timestamp
     */
    this.get_tweet_pos = function(timestamp,i) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();

            req.open('GET', "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps="+timestamp+"&units=miles");

            req.onload = function() {
                if (req.status == 200) {

                    resolve(req.response);
                    var lat = JSON.parse(req.response)[0].latitude;
                    var lon = JSON.parse(req.response)[0].longitude;

                    self.add_mark(lat, lon, i);
                }
                else {
                    reject(Error(req.statusText));
                }
            };

            req.onerror = function() {
                reject(Error("Network Error"));
            };

            req.send();
        });
    }


    /*
     * get_iss_data()
     * Called every X second
     * get ISS altitude, latitude, longitude & speed with
     * ajax request to http://wheretheiss.at/w/developer
     */
    this.get_iss_data = function() {
        var xhttp  = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                var alti  = JSON.parse(this.responseText).altitude,
                    lat   = JSON.parse(this.responseText).latitude,
                    lon   = JSON.parse(this.responseText).longitude,
                    speed = JSON.parse(this.responseText).velocity;

                self.draw_travel(lat, lon);
                self.get_city_overflown(lat, lon);
                self.update_speed(speed);
                self.update_altitude(alti);
                self.move_iss(lat, lon);
                self.iss_cropping(lat, lon);
            }
        };

        xhttp.open("GET", "https://api.wheretheiss.at/v1/satellites/25544&units=miles", true);
        xhttp.send();
    }

    this.update_iss_data = function() {
        var xhttp  = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                var alti  = JSON.parse(this.responseText).altitude,
                    lat   = JSON.parse(this.responseText).latitude,
                    lon   = JSON.parse(this.responseText).longitude,
                    speed = JSON.parse(this.responseText).velocity;

                self.draw_travel(lat, lon);
                self.get_city_overflown(lat, lon);
                self.update_speed(speed);
                self.update_altitude(alti);
                self.move_iss(lat, lon);
            }
        };

        xhttp.open("GET", "https://api.wheretheiss.at/v1/satellites/25544&units=miles", true);
        xhttp.send();
    }

    this.iss_cropping =  function(lat, lon) {

        this.earth.panTo([lat, lon]);
    }


    /*
     * get_city_overflown()
     * Called every X second
     * Get the city overflown with ajax request to
     * https://api.wheretheiss.at/v1/coordinates/ with lat & lon parameters
     */
    this.get_city_overflown = function(lat, lon) {
        var xhttp  = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                var city   = JSON.parse(this.responseText).timezone_id,
                    string = city.split('/'),
                    city   = string[0] + ' - ' + string[1];

                self.$el.city_over.innerText = '';
                self.$el.city_over.innerText = city;
            }
            else if(this.readyState == 4 && this.status != 200) {
                var city = 'Ocean';
                self.$el.city_over.innerText = '';
                self.$el.city_over.innerText = city;
            }
        };

        xhttp.open("GET", "https://api.wheretheiss.at/v1/coordinates/" + lat + ',' + lon, true);
        xhttp.send();
    }


    /*
     * draw_travel()
     * Called in get_iss_data()
     * get ISS latitude & longitude with
     */
    this.draw_travel = function(lat, lon) {
        var marker = WE.marker([lat, lon]).addTo(this.earth);

        $path = marker.element.firstChild;
        $path.classList.remove('we-pm-icon');
        $path.removeAttribute('style');
        $path.classList.add('we-pm-icon-path');

        if (this.path.length <= 150) {
            this.path.push($path);
        }
        else {
            this.path[0].remove();
            this.path.shift();
            this.path.push($path);
        }
    }


    /*
     * move_iss()
     * Called in get_iss_data()
     * get ISS latitude & longitude with
     */
    this.move_iss = function(lat, lon) {
        var marker = WE.marker([lat, lon]).addTo(this.earth);

        $ship = marker.element.firstChild;
        $ship.classList.remove('we-pm-icon');
        $ship.removeAttribute('style');
        $ship.classList.add('we-pm-icon-ship');

        if (this.ship_path.length <= 1) {
            this.ship_path.push($ship);
        }
        else {
            this.ship_path[0].remove();
            this.ship_path.shift();
            this.ship_path.push($ship);
        }
    }


    /*
     * add_mark(lat: number, lon: number, i: number)
     * Called in get_tweet_pos()
     * Add marker on the map according to lat & lon
     */
    this.add_mark = function(lat, lon, i) {
        var marker = WE.marker([lat, lon]).addTo(this.earth);

        $marker = marker.element.firstChild;
        $marker.classList.remove('we-pm-icon');
        $marker.removeAttribute('style');
        $marker.classList.add('we-pm-icon-marker');

        self.create_popup(marker.element, i);
    }


    /*
     * create_popup(i: number)
     * Called in add_mark()
     * Add create popup of the marker
     */
    this.create_popup = function(marker, i) {

        // Create popup template
        $popup = document.createElement('div');
        $popup.classList.add('marker-popup');

        $popup_header = document.createElement('div');
        $popup_header.classList.add('popup-header');

        $image = document.createElement('img');
        $image.classList.add('popup-image');
        $image.setAttribute('src', self.latest_tweets[i].picture);

        $name = document.createElement('h2');
        $name.classList.add('popup-name');
        $name.innerText = self.latest_tweets[i].name;

        $text = document.createElement('p');
        $text.classList.add('popup-text');
        $text.innerText = self.latest_tweets[i].tweet_text;

        // $popup.appendChild($image);
        // $popup.appendChild($name);

        $popup_header.appendChild($image);
        $popup_header.appendChild($name);
        $popup.appendChild($popup_header);
        $popup.appendChild($text);

        marker.appendChild($popup);

        // Set hover listener
        marker.addEventListener('mouseover', function() {

            this.lastChild.style.opacity = 1;
            this.lastChild.style.transform = 'scale(1)';
        })

        marker.addEventListener('mouseleave', function() {

            this.lastChild.style.opacity = 0;
            this.lastChild.style.transform = 'scale(0)';
        })
    }


    /*
     * update_speed()
     * Called in get_iss_data()
     * Update speed of ISS
     */
    this.update_speed = function(speed) {
        speed = speed.toString();
        speed = speed.substring(0, 8);

        this.$el.speed.innerText = '';
        this.$el.speed.innerText = speed + ' km/h';
    }

    /*
     * update_speed()
     * Called in get_iss_data()
     * Update speed of ISS
     */
    this.update_altitude = function(alti) {
        alti = alti.toString();
        alti = alti.substring(0, 6);

        this.$el.altitude.innerText = '';
        this.$el.altitude.innerText = alti + ' kilometers';
    }


    /*
     * toggle_feed()
     * Called when user click on list link
     */
    this.toggle_feed = function() {
        this.$el.feed_link.classList.toggle('active');
        this.$el.container.classList.toggle('feed-mode');

        this.$el.team_link.classList.remove('active');
        this.$el.container.classList.remove('team-mode');
    }


    /*
     * toggle_team()
     * Called when user click on list link
     */
    this.toggle_team = function() {
        this.$el.team_link.classList.toggle('active');
        this.$el.container.classList.toggle('team-mode');

        this.$el.feed_link.classList.remove('active');
        this.$el.container.classList.remove('feed-mode');
    }
}

var earth = new App(document.querySelector('.app'));

document.addEventListener('DOMContentLoaded', function() {

    earth.init();
})
