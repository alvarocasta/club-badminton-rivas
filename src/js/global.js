import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import 'slick-carousel';

import * as mainStyles from '../scss/main.scss';
import * as globalStyles from '../scss/global.scss';


$('.bubleSlide').slick({
    speed: 700,
    fade: true,
    arrows: false,
    autoplay: false,
    dots: true,
    cssEase: 'linear',
    customPaging: function (slider, i) {
        var icon = $(slider.$slides[i]).data('icon');
        return '<span class="bubleSlide__icon fa fa-' + icon + '"></span>';
    }
});



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'BkbrwJNsxHs',
        playerVars: {
            controls: 0,
            loop: 1,
            modestbranding: 1,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange':
                function(e){
                    if (e.data === YT.PlayerState.ENDED) {
                        player.playVideo();
                    }
                }
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    //not autoplay for mobiles
    if(window.innerWidth > 800 && window.innerHeight > 600) {
        if (event.target) {
            event.target.playVideo();
        }
    }
}


//this pauses the video when it's out of view, just wrap your video in .m-//video
$(window).scroll(function () {
    var hT = $('.m-video').height(),
        wS = $(this).scrollTop();
    if (wS > hT) {
        if (player) {
            player.setVolume(0);
        }
    }
    else {
        if(player) {

            player.setVolume(Math.abs(100 - (100*wS)/hT));
        }
    }
});

