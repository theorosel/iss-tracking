var mute       = document.querySelector(".muted");
var fullScreen = document.querySelector(".fullscreen");

var i = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('playerid', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

   player.playVideo();
   player.mute();
}


// mute.addEventListener("click", function(){
//    i++;
//    if ( (i % 2) == 0) {
//      player.mute();
//    } else {
//     player.unMute();
//    }
// });


// fullScreen.addEventListener("click", function() {
// var player = document.querySelector('#playerid');
//
//    if (player.mozRequestFullScreen) {
//       player.mozRequestFullScreen();
//    } else if (player.webkitRequestFullScreen) {
//       player.webkitRequestFullScreen();};
// });
