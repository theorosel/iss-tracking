function App(element) {

    // DOM elements
    this.$el           = {};
    this.$el.container = element;
    this.$el.altitude  = this.$el.container.querySelector('.altitude');
    this.$el.speed     = this.$el.container.querySelector('.speed');
    this.$el.city_over = this.$el.container.querySelector('.city');
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
     * Links click event Handler
     */
    this.$el.feed_link.addEventListener('click', function(event) {
        self.toggle_feed();
    });

    this.$el.team_link.addEventListener('click', function(event) {
        self.toggle_team();
    });


    setInterval(function(){
        self.get_iss_data();
    }, 3000);


    this.init = function() {
        this.get_latest_tweets();

        setTimeout(function() {

            for (var i = 0; i < self.latest_tweets.length; i++) {

                self.get_twitter_pos(self.latest_tweets[i].picture);

                self.add_mark(i, i);

                $popup = document.createElement('div');
                $popup.classList.add('marker-popup');

                $image = document.createElement('img');
                $image.classList.add('popup-image');
                $image.setAttribute('src', self.latest_tweets[i].picture);

                $text = document.createElement('p');
                $text.classList.add('popup-text');
                $text.innerText = self.latest_tweets[i].tweet_text;

                $popup.appendChild($image);
                $popup.appendChild($text);
                console.log(self.latest_tweets[i].tweet_text);


                // $popup.appendChild(self.latest_tweets[i].id);

                self.markers[i].element.appendChild($popup);

                self.markers[i].element.addEventListener('mouseover', function() {

                    this.lastChild.style.opacity = 1;
                    this.lastChild.style.transform = 'scale(1)';
                })

                self.markers[i].element.addEventListener('mouseleave', function() {

                    this.lastChild.style.opacity = 0;
                    this.lastChild.style.transform = 'scale(0)';
                })
            }

            // for (var j = 0; j < self.markers.length; j++) {
            //
            //     $popup = document.createElement('div');
            //     $popup.classList.add('marker-popup');
            //
            //     self.markers[j].element.appendChild($popup);
            //
            //     self.markers[j].element.addEventListener('mouseover', function() {
            //
            //         this.lastChild.style.opacity = 1;
            //         this.lastChild.style.transform = 'scale(1)';
            //     })
            //
            //     self.markers[j].element.addEventListener('mouseleave', function() {
            //
            //         this.lastChild.style.opacity = 0;
            //         this.lastChild.style.transform = 'scale(0)';
            //     })
            // }
        }, 2000);



        // this.current_pos();
        // this.get_iss_data();
        // this.add_mark(-50, -50);
        // this.add_mark(-30, -30);

        // for (var i = 0; i < this.markers.length; i++) {
        //     console.log(this.markers[i]);
        //     $popup = document.createElement('div');
        //     $popup.classList.add('marker-popup');
        //
        //     this.markers[i].element.appendChild($popup);
        //
        //     this.markers[i].element.addEventListener('mouseover', function() {
        //         this.lastChild.style.opacity = 1;
        //         this.lastChild.style.transform = 'scale(1)';
        //     })
        //
        //     this.markers[i].element.addEventListener('mouseleave', function() {
        //         this.lastChild.style.opacity = 0;
        //         this.lastChild.style.transform = 'scale(0)';
        //     })
        // }

        console.log(this.markers);
    }


    /*
     * get_latest_tweets()
     * Called when the DOM is fully loaded
     * Get X latests tweets
     */
    this.get_latest_tweets = function() {
        var xhttp  = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                var results = JSON.parse(this.responseText);
                console.log(results);

                for (var i = 0; i < results.length; i++) {
                    self.latest_tweets.push(results[i]);
                }
            }
        };

        xhttp.open("GET", "/api/twitter", true);
        xhttp.send();
    }

    this.get_twitter_pos = function() {

    }


    /*
     * initialize()
     * Called when the DOM is fully loaded
     * Generate earth
     */
    this.initialize = function() {
        WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
            minZoom: 0,
            maxZoom: 300,
            zooming: false,
            attribution: 'NASA'
        }).addTo(this.earth);
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
            }
        };

        xhttp.open("GET", "https://api.wheretheiss.at/v1/satellites/25544&units=miles", true);
        xhttp.send();
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
     * add_mark()
     * Called in get_iss_feed()
     * Add marker on the map according to lat & lon
     */
    this.add_mark = function(lat, lon) {
        var marker = WE.marker([lat, lon]).addTo(this.earth);

        $marker = marker.element.firstChild;
        $marker.classList.remove('we-pm-icon');
        $marker.removeAttribute('style');
        $marker.classList.add('we-pm-icon-marker');

        self.markers.push(marker);
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
        console.log(alti);
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

document.addEventListener('DOMContentLoaded', function(event) {

    earth.init();
    earth.initialize();
    event.preventDefault(event);
})
