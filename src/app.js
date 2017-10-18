const css = require('./app.scss');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
import ReactTooltip from 'react-tooltip'; 
import mLogo from './img/BMW-M.png';

import React from 'react';
import ReactDOM from 'react-dom';
//import mLogo from '../../img/BMW-M.png';
import Intro from './components/intro/Intro';
import Performance from'./components/performance/Performance';
import Exterior from './components/exterior/Exterior';
import Interior from './components/interior/Interior';
import Specs from './components/specs/Specs';
import Footer from './components/footer/Footer';
import $ from "jquery";

ReactDOM.render(
    <div className="App">
        {/*<a href="https://www.bmwusa.com/vehicles/m.html" target="_blank"><img id="m-logo" src={mLogo} height="50px"></img></a>*/}
        <Intro />
        <Performance />
        <Exterior />
        <Interior />
        <Specs />   
        <Footer />
    </div>,
    document.getElementById('root')
);

$("#arrow-group > img").click(function() {
    $('html, body').animate({
        scrollTop: $(".Two").offset().top
    }, 2000);
});


$(document).ready(function(){    
    //Gives the exact distance between the top of two elements
    //This is for navbar effects
    //var navToElevenHeight = $('.Eleven').offset().top - $('.Six').offset().top; 
    var heightOfSix = $('.Seven').offset().top - $('.Six').offset().top;
    var heightOfSeven = $('.Eight').offset().top - $('.Seven').offset().top;
    var heightOfEight = $('.Ten').offset().top - $('.Eight').offset().top;
    var heightOfTen = $('.Eleven').offset().top - $('.Ten').offset().top;
    
    var controller = new ScrollMagic.Controller();
    
    var pinTopNavScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0
    })
    .setPin('.navbar')
    
    .addTo(controller);
    
    var changeTopNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.Ten',
        triggerHook: 0.15,
        duration: heightOfTen
    })
    .setClassToggle('.navbar', 'black-nav')
    .addTo(controller);
    
    var pushNavUpTween = TweenMax.to(".navbar", 0.05, {
        y: "-=50px",
        autoRound:false
    });
    
    var pushNavUpScene = new ScrollMagic.Scene({
        triggerElement: '.Eleven',
        triggerHook: 0.05
    })
    .setTween(pushNavUpTween)
    .addTo(controller);
    
    var arrowTween = TweenMax.staggerTo("#arrow-group img", 0.1, { ease:  Power0.easeNone, opacity: 0, scale: 0.5}, 0.2);    
    
    var arrowDisappearScene = new ScrollMagic.Scene({
        triggerElement: '#arrow-group',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
    })
    .setTween(arrowTween)
    .setClassToggle('#arrow-group', 'disable-arrows') //disables arrows after disappearance
    .addTo(controller);
        
    var twoFlexBoxScene = new ScrollMagic.Scene({
        triggerElement: '.scrollmagic-two-target',
        triggerHook: 0.7,
        offset: 0,
        reverse: false
    })
    .setClassToggle('.scrollmagic-two-target', 'come-to-center')
    .addTo(controller);
    
    $('.scrollmagic-enter-from-right').each(function(){
        var sixEnterFromRightScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.6,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'come-to-center')
        .addTo(controller);
    })
    
    $('.scrollmagic-enter-from-left').each(function(){
        var sixEnterFromLeftScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.6,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'come-to-center')
        .addTo(controller);
    })

    
    $('.scrollmagic-scale-flex-box').each(function(){
        var scaleFlexBoxScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'shrink-on-appear')
        .addTo(controller);
    })
    
    /*----- navbar animations -----*/
    
    var navTween = TweenMax.staggerFrom(".navbar li", 0.6, { ease:  Power0.easeNone, opacity: 0, x:100, scale: 2}, 0.3);
    
    var navItemsAppearScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0.9,
        offset: 0,
        reverse: false
    })
    .setTween(navTween)
    .addTo(controller);
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
        
    /* ----Background Scroll animations -----*/    
    var oneParallaxTween = TweenMax.to(".One", 1, {
      backgroundSize: "+=250px +=166.7px", 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	
	var oneParallaxscene = new ScrollMagic.Scene({
        triggerElement: "#trigger", 
        duration: "100%"
    })
    .setTween(oneParallaxTween)
    .addTo(controller);
    
    var threeParallaxTween = TweenMax.to(".Three", 1, {
        backgroundPositionX: "-=50%", 
        autoRound:false, 
        ease:Power1.ease0ut
    });

	
	var threeParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Three", 
        triggerHook: 1, 
        duration: "150%"
    })
    .setTween(threeParallaxTween) 
    .addTo(controller);
    
    var fourParallaxTween = TweenMax.to(".Four", 1, {
        backgroundSize: "+=500px +=281.25px", 
        backgroundPositionX: "-=300px",
        autoRound:false, 
        ease:Power1.ease0ut
    });

	
	var fourParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Four", 
        triggerHook: 1, 
        autoRound:false,
        duration: "150%"
    })
    
    .setTween(fourParallaxTween)
    .addTo(controller);
    
    var nineParallaxTween = TweenMax.from(".Nine", 1, {
        backgroundSize: "+=200px +=112.96875px",
        backgroundPositionX: "-=100px",
        autoRound:false, 
        ease:Power0.ease0ut
    });

	
	var nineParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Nine", 
        triggerHook: 1, 
        autoRound:false,
        duration: "150%"
    })
    
    .setTween(nineParallaxTween)
    .addTo(controller);
    
    var elevenParallaxTween = TweenMax.from(".Eleven", 1, {
      backgroundSize: "+=200px +=149.84px", 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	
	var elevenParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Eleven", 
        triggerHook: 1, 
        duration: "102%"
    })
    .setTween(elevenParallaxTween)
    .addTo(controller);
    
    /*----- Navbar highlights -----*/
    
    new ScrollMagic.Scene({
        triggerElement: ".Six",
        triggerHook: 0.5,
        duration: heightOfSix
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(2)", "active") // add class toggle
    .addTo(controller);
    
	new ScrollMagic.Scene({
        triggerElement: ".Seven",
        triggerHook: 0.5,
        duration: heightOfSeven
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(3)", "active") // add class toggle
    .addTo(controller);
    
	new ScrollMagic.Scene({
        triggerElement: ".Eight",
        triggerHook: 0.5,
        duration: heightOfEight
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active") // add class toggle
    .addTo(controller);
    
	new ScrollMagic.Scene({
        triggerElement: ".Ten",
        triggerHook: 0.15,
        duration: heightOfTen
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active") // add class toggle
    .addTo(controller);
})
