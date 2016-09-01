/*
 *js/scripts.js
 *
 *By Tanguy SCHOLTES
 *Started on 28/09/2015
 */

(function() {
    "use strict";
        
    /*------- Slick.js -------*/
    //Simple slider using jquery
    $(document).ready(function(){
        $('.carousel').slick({
            autoplay: true,         //enables slider autoplay
            infinite: true,         //enables infinite looping slider
            autoplaySpeed: 3000,    //time between transitions in ms
            speed: 300,             //transition speed in ms
            arrows: false,          //disables navigation arrows
            dots: false,            //disables navigation dots
            draggable: true,        //enables mousedrag to slide
            swipe: true,            //enables swipe to slide
            touchMove: true,        //enables touch to slide
            fade: true,             //enables fade transition
            pauseOnHover: false,    //disables pause of slider on mouse hover
            
        });
    });
}) ();