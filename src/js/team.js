var div = 360 / 6;
var radius = 280;
var parent = document.querySelector('.team-area');
var offsetToParentCenter = parseInt(circle_div.offsetWidth / 2);  //assumes parent is square
var offsetToChildCenter = 70;
var totalOffset = offsetToParentCenter - offsetToChildCenter;

function excerpt(text) {

    text = text.trim();
    text_length = text.length;

    if (text_length >= 500) {

        text = text.substring(0, 500);

        return text;
    }

    else {
        return text;
    }
};


function get_astronautes() {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();

        req.open('GET', "/api/wikipedia");

        req.onload = function() {
            if (req.status == 200) {

                var result = JSON.parse(req.response);
                resolve(result);
                console.log(result);

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



document.addEventListener('DOMContentLoaded', function(event) {

    get_astronautes().then(function(response) {

        for (var i = 0; i <= response.length - 1; ++i) {
            var childdiv = document.createElement('div');
            childdiv.className = 'div_circle circle' + i;
            childdiv.style.position = 'absolute';
            childdiv.style.backgroundImage = "url('" + response[i].image+ "')";

            var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
            var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
            childdiv.style.top = (y + totalOffset).toString() + "px";
            childdiv.style.left = (x + totalOffset).toString() + "px";
            circle_div.appendChild(childdiv);

            //create parent
            var $content = document.createElement('div');
            $content.className = 'content content' + i;

            // Astronaut name
            $name = document.createElement('h2');
            $name.className = 'content-name';
            name  = response[i].name;
            $name.innerText = name;

            // Astronaut extract
            $extract = document.createElement('p');
            $extract.className = 'content-extract';
            extract  = response[i].extract;
            extract = excerpt(extract);
            $extract.innerText = extract;

            // Astronaut age
            $age = document.createElement('div');
            $age.className = 'age';

            $age_text = document.createElement('p');
            $age_text.className = 'age-text';
            $age_text.innerText = 'Age : ';

            $age_data = document.createElement('p');
            $age_data.className = 'age-data';
            $age_data.innerText = response[i].age;

            $age.appendChild($age_text);
            $age.appendChild($age_data);

            // Astronaut age
            $nationality = document.createElement('div');
            $nationality.className = 'nationality';

            $nationality_text = document.createElement('p');
            $nationality_text.className = 'nationality-text';
            $nationality_text.innerText = 'Nationality : ';

            $nationality_data = document.createElement('p');
            $nationality_data.className = 'nationality-data';
            $nationality_data.innerText = response[i].nationality;

            $nationality.appendChild($nationality_text);
            $nationality.appendChild($nationality_data);


            // Set to the parent
            $content.appendChild($name);
            $content.appendChild($extract);
            $content.appendChild($nationality);
            $content.appendChild($age);
            parent.appendChild($content);
        }

        var circle = document.querySelectorAll('.div_circle');


        function animateButtonUp1() {
            document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(0deg)' },{ transform: 'rotate(60deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            document.querySelector(".circle3").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
            );
            document.querySelector(".circle2").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
            );
            document.querySelector(".content3").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
            );
            document.querySelector(".content2").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
            );
            for (var i = 0; i < circle.length; i++){
              console.log(circle.length);
            circle[i].animate(
              [{ transform: 'rotate(0deg)' },{ transform: 'rotate(-60deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(-60deg)";
            }
            document.querySelector('#circle_background').style.transform = "rotate(60deg)";
            document.querySelector('.content3').style.opacity = "0";
            document.querySelector('.content2').style.opacity = "1";
            document.querySelector('.circle3').style.height = "120px";
            document.querySelector('.circle3').style.width = "120px";
            document.querySelector('.circle2').style.height = "160px";
            document.querySelector('.circle2').style.width = "160px";
            document.querySelector('.count_live').innerHTML = "2";
            };

        /** 2 **/

        function animateButtonUp2() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(60deg)' },{ transform: 'rotate(120deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle2").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle1").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content2").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content1").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(-60deg)' },{ transform: 'rotate(-120deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(-120deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(120deg)";
          document.querySelector('.content2').style.opacity = "0";
          document.querySelector('.content1').style.opacity = "1";
          document.querySelector('.circle2').style.height = "120px";
          document.querySelector('.circle2').style.width = "120px";
          document.querySelector('.circle1').style.height = "160px";
          document.querySelector('.circle1').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "3";
        };

        /** 3 **/

        function animateButtonUp3() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(120deg)' },{ transform: 'rotate(180deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle1").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle0").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content1").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content0").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(-120deg)' },{ transform: 'rotate(-180deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(-180deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(180deg)";
          document.querySelector('.content1').style.opacity = "0";
          document.querySelector('.content0').style.opacity = "1";
          document.querySelector('.circle1').style.height = "120px";
          document.querySelector('.circle1').style.width = "120px";
          document.querySelector('.circle0').style.height = "160px";
          document.querySelector('.circle0').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "4";
        };

        /** 4 **/

        function animateButtonUp4() {

          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(180deg)' },{ transform: 'rotate(240deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle0").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle5").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content0").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content5").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(-180deg)' },{ transform: 'rotate(-240deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(-240deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(240deg)";
          document.querySelector('.content0').style.opacity = "0";
          document.querySelector('.content5').style.opacity = "1";
          document.querySelector('.circle0').style.height = "120px";
          document.querySelector('.circle0').style.width = "120px";
          document.querySelector('.circle5').style.height = "160px";
          document.querySelector('.circle5').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "5";
        };

        /** 5 **/

        function animateButtonUp5() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(240deg)' },{ transform: 'rotate(300deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle5").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle4").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content5").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content4").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(-240deg)' },{ transform: 'rotate(-300deg)' }],
              {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(-300deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(300deg)";
          document.querySelector('.content5').style.opacity = "0";
          document.querySelector('.content4').style.opacity = "1";
          document.querySelector('.circle5').style.height = "120px";
          document.querySelector('.circle5').style.width = "120px";
          document.querySelector('.circle4').style.height = "160px";
          document.querySelector('.circle4').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "6";
        };

        /** 6 **/

        function animateButtonUp6() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(300deg)' },{ transform: 'rotate(360deg)' }], {easing: "ease",duration: 750,iteration: 1 }
          );
          document.querySelector(".circle4").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1 }
          );
          document.querySelector(".circle3").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1 }
          );
          document.querySelector(".content4").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1 }
          );
          document.querySelector(".content3").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1 }
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(-300deg)' },{ transform: 'rotate(-360deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(-360deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(360deg)";
          document.querySelector('.content4').style.opacity = "0";
          document.querySelector('.content3').style.opacity = "1";
          document.querySelector('.circle4').style.height = "120px";
          document.querySelector('.circle4').style.width = "120px";
          document.querySelector('.circle3').style.height = "160px";
          document.querySelector('.circle3').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "1";
        };




        /******    DOWN ANIMATION    ******/


        /** 1 **/

        function animateButtonDown1() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(0deg)' },{ transform: 'rotate(-60deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle3").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle4").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content3").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content4").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(0deg)' },{ transform: 'rotate(60deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(60deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(-60deg)";
          document.querySelector('.content3').style.opacity = "0";
          document.querySelector('.content4').style.opacity = "1";
          document.querySelector('.circle3').style.height = "120px";
          document.querySelector('.circle3').style.width = "120px";
          document.querySelector('.circle4').style.height = "160px";
          document.querySelector('.circle4').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "6";
        };

        /** 2 **/

        function animateButtonDown2() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(-60deg)' },{ transform: 'rotate(-120deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle4").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle5").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content4").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content5").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(60deg)' },{ transform: 'rotate(120deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(120deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(-120deg)";
          document.querySelector('.content4').style.opacity = "0";
          document.querySelector('.content5').style.opacity = "1";
          document.querySelector('.circle4').style.height = "120px";
          document.querySelector('.circle4').style.width = "120px";
          document.querySelector('.circle5').style.height = "160px";
          document.querySelector('.circle5').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "5";
        };

        /** 3 **/

        function animateButtonDown3() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(-120deg)' },{ transform: 'rotate(-180deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle5").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle0").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content5").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content0").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(120deg)' },{ transform: 'rotate(180deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(180deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(-180deg)";
          document.querySelector('.content5').style.opacity = "0";
          document.querySelector('.content0').style.opacity = "1";
          document.querySelector('.circle5').style.height = "120px";
          document.querySelector('.circle5').style.width = "120px";
          document.querySelector('.circle0').style.height = "160px";
          document.querySelector('.circle0').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "4";
        };

        /** 4 **/

        function animateButtonDown4() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(-180deg)' },{ transform: 'rotate(-240deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle0").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle1").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content0").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content1").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(180deg)' },{ transform: 'rotate(240deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(240deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(-240deg)";
          document.querySelector('.content0').style.opacity = "0";
          document.querySelector('.content1').style.opacity = "1";
          document.querySelector('.circle0').style.height = "120px";
          document.querySelector('.circle0').style.width = "120px";
          document.querySelector('.circle1').style.height = "160px";
          document.querySelector('.circle1').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "3";
        };

        /** 5 **/

        function animateButtonDown5() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(-240deg)' },{ transform: 'rotate(-300deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle1").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle2").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content1").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content2").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(240deg)' },{ transform: 'rotate(300deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(300deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(-300deg)";
          document.querySelector('.content1').style.opacity = "0";
          document.querySelector('.content2').style.opacity = "1";
          document.querySelector('.circle1').style.height = "120px";
          document.querySelector('.circle1').style.width = "120px";
          document.querySelector('.circle2').style.height = "160px";
          document.querySelector('.circle2').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "2";
        };

        /** 6 **/

        function animateButtonDown6() {
          document.querySelector("#circle_background").animate(
            [{ transform: 'rotate(-300deg)' },{ transform: 'rotate(-360deg)' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle2").animate(
            [{ width: '160px', height: '160px' },{ width: '120px', height: '120px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".circle3").animate(
            [{ width: '120px', height: '120px' },{ width: '160px', height: '160px' }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content2").animate(
            [{ opacity: 1 },{ opacity: 0 },{ opacity: 0 }], {easing: "ease",duration: 750,iterations: 1}
          );
          document.querySelector(".content3").animate(
            [{ opacity: 0 },{ opacity: 0 },{ opacity: 1 }], {easing: "ease",duration: 750,iterations: 1}
          );
          for (var i = 0; i < circle.length; i++){
            circle[i].animate(
              [{ transform: 'rotate(300deg)' },{ transform: 'rotate(360deg)' }], {easing: "ease",duration: 750,iterations: 1}
            );
            circle[i].style.transform = "rotate(360deg)";
          }
          document.querySelector('#circle_background').style.transform = "rotate(-360deg)";
          document.querySelector('.content2').style.opacity = "0";
          document.querySelector('.content3').style.opacity = "1";
          document.querySelector('.circle2').style.height = "120px";
          document.querySelector('.circle2').style.width = "120px";
          document.querySelector('.circle3').style.height = "160px";
          document.querySelector('.circle3').style.width = "160px";
          document.querySelector('.count_live').innerHTML = "1";
        };


        /** EXECUTION **/

        var lethargy = new Lethargy();
        var state = false;
        var count = 2


        /** MOUSE WHEEL **/

        var team = document.querySelector('.team-area');

        team.addEventListener("mousewheel", function(e) {
            mouse_wheel_handler(e);
        }, false);
        team.addEventListener("DOMMouseScroll", function(e) {
            mouse_wheel_handler(e);
        }, false);

        function mouse_wheel_handler(e){
          e.preventDefault()
          e.stopPropagation();
          if(lethargy.check(e) !== false) {
            if (!state) { state = !state;
              if (lethargy.check(e) == 1) {  // Scroll Up
                count -= 1;
                console.log(count);
                if (count == 2){ animateButtonUp6();}
                else if (count == 3){animateButtonUp5();}
                else if (count == 4){animateButtonUp4();}
                else if (count == 5){animateButtonUp3();}
                else if (count == 6){animateButtonUp2();}
                else if (count == 0){animateButtonUp1(); count = 7;}
                else {animateButtonUp1(); count = 7;}
              }
              else if (lethargy.check(e) == -1) {  // Scroll Down
                count += 1;
                console.log(count);
                if (count == 2){animateButtonDown6();}
                else if (count == 3){animateButtonDown1();}
                else if (count == 4){animateButtonDown2();}
                else if (count == 5){animateButtonDown3();}
                else if (count == 6){animateButtonDown4();}
                else if (count == 7){animateButtonDown5();}
                else if (count == 8){animateButtonDown6(); count = 2;}
                else{ animateButtonDown5(); count = 1;}
              }
            setTimeout(function(){state = false;}, 500);
            }
          }
        };

        /** KEY PRESS **/

        window.addEventListener("keydown", keyMove, false);

        function keyMove(e) {
          switch(e.keyCode) {
            case 38: // up key pressed
              count -= 1;
              console.log(count);
              if (count == 2){ animateButtonUp6();}
              else if (count == 3){animateButtonUp5();}
              else if (count == 4){animateButtonUp4();}
              else if (count == 5){animateButtonUp3();}
              else if (count == 6){animateButtonUp2();}
              else if (count == 0){animateButtonUp1(); count = 7;}
              else {animateButtonUp1(); count = 7;}
            break;
            case 40: // down key pressed
              count += 1;
              console.log(count);
              if (count == 2){animateButtonDown6();}
              else if (count == 3){animateButtonDown1();}
              else if (count == 4){animateButtonDown2();}
              else if (count == 5){animateButtonDown3();}
              else if (count == 6){animateButtonDown4();}
              else if (count == 7){animateButtonDown5();}
              else if (count == 8){animateButtonDown6(); count = 2;}
              else{ animateButtonDown5(); count = 1;}
            break;
          }
        }

        /** BUTTON PRESS **/

        var button_up = document.querySelector('.button-up'); // Button up
            button_up.addEventListener('click', function() {
              count -= 1;
              console.log(count);
              if (count == 2){ animateButtonUp6();}
              else if (count == 3){animateButtonUp5();}
              else if (count == 4){animateButtonUp4();}
              else if (count == 5){animateButtonUp3();}
              else if (count == 6){animateButtonUp2();}
              else if (count == 0){animateButtonUp1(); count = 7;}
              else {animateButtonUp1(); count = 7;}
            });

        var button_down = document.querySelector('.button-down'); // Button down
            button_down.addEventListener('click', function() {
              count += 1;
              console.log(count);
              if (count == 2){animateButtonDown6();}
              else if (count == 3){animateButtonDown1();}
              else if (count == 4){animateButtonDown2();}
              else if (count == 5){animateButtonDown3();}
              else if (count == 6){animateButtonDown4();}
              else if (count == 7){animateButtonDown5();}
              else if (count == 8){animateButtonDown6(); count = 2;}
              else{ animateButtonDown5(); count = 1;}
            });
    });
})
