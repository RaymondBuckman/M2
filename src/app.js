const css = require('./app.scss');
require('./img/favicon.ico');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
import ReactTooltip from 'react-tooltip'; 
import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/Intro';
import Performance from'./components/performance/Performance';
import Exterior from './components/exterior/Exterior';
import Interior from './components/interior/Interior';
import Specs from './components/specs/Specs';
import Footer from './components/footer/Footer';
import $ from "jquery";

function closeDropdowns(){
    $('#executive-package-list, #m-drivers-package-desc').hide();
}

ReactDOM.render(
    <div className='App' onClick={closeDropdowns}>
        <Intro />
        <Performance />
        <Exterior />
        <Interior />
        <Specs />   
        <Footer />
    </div>,
    document.getElementById('root')
);



$(document).ready(function(){  
    //setTimeout(function(){ alert("Hello"); }, 3000);
    var navbarHeightAsWindowPercentage = 50/$(window).height();
    
    
    var arrowGroup = $('#arrow-group');
    var flashingDivs = $('.intro-div-1, .performance-div-2, .exterior-div-2, .interior-div-2, .specs-div-3');
    
    /*----- GSAP equivalent of former move-arrows css animation -----*/
    var downArrowTimeline = new TimelineMax({delay:0.5, repeat:-1, repeatDelay:0.2});
    
    downArrowTimeline.to(arrowGroup, 1, {y:'10px', ease:Power3.easeIn})
    downArrowTimeline.to(arrowGroup, 1, {y:'0px', ease:Power3.easeOut, delay:0})
    
    /*----- GSAP equivalent of former occasional-brightness css animation -----*/
    var occasionalBrightnessTimeline = new TimelineMax({delay:0.5, repeat:-1, repeatDelay:0.2});
    
    occasionalBrightnessTimeline.to(flashingDivs, 0.5, {webkitFilter:'brightness(100%)', filter:'brightness(100%)', ease:Linear.easeNone})
    occasionalBrightnessTimeline.to(flashingDivs, 2, {webkitFilter:'brightness(113%)', filter:'brightness(113%)',  ease:Power3.easeIn})
    occasionalBrightnessTimeline.to(flashingDivs, 2, {webkitFilter:'brightness(100%)', filter:'brightness(100%)', ease:Power3.easeOut, delay:0})
    
    /* Variables for nav highlight durations*/    
    var heightOfPerformance = $('.exterior-div-1').offset().top - $('.performance-div-1').offset().top;
    var heightOfExterior = $('.interior-div-1').offset().top - $('.exterior-div-1').offset().top;
    var heightOfInterior = $('.specs-div-2').offset().top - $('.interior-div-1').offset().top;
    var heightOfSpecs = $('.specs-div-3').offset().top - $('.specs-div-2').offset().top;
    
    /*----- ScrollMagic Section -----*/
    var controller = new ScrollMagic.Controller();    
    
    /*----- Pin animations -----*/
    var pinMLogoScene = new ScrollMagic.Scene({
        triggerElement: '#m-logo',
        triggerHook: 0.02,
        duration: '40%'
    })
    .setPin('#m-logo')
    .addTo(controller);  
    
    var pinTopNavScene = new ScrollMagic.Scene({
        triggerElement: '.performance-div-1',
        triggerHook: navbarHeightAsWindowPercentage
    })
    .setPin('.navbar')
    .addTo(controller);
    
    /*----- Nav color change & push-up animations -----*/
    var blackNavTween = TweenMax.to(".navbar", 0.05, {
        backgroundColor: "#000000"
    });
    
    var blackNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.specs-div-2',
        triggerHook: 0.15
    })
    .setTween(blackNavTween)
    .addTo(controller);
    
    var grayNavTween = TweenMax.to(".navbar", 0.05, {
        backgroundColor: "#414445"
    });
    
    var grayNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.specs-div-3',
        triggerHook: 0.15
    })
    .setTween(grayNavTween)
    .addTo(controller);
    
    var pushNavUpTween = TweenMax.to(".navbar", 0.05, {
        y: "-=50px",
        autoRound: false
    });
    
    var pushNavUpScene = new ScrollMagic.Scene({
        triggerElement: '.specs-div-3',
        triggerHook: 0.05
    })
    .setTween(pushNavUpTween)
    .addTo(controller);
    
    /*----- Arrow shrink & fade-out animation -----*/
    var arrowTween = TweenMax.staggerTo("#arrow-group img", 0.1, { ease:  Power0.easeNone, opacity: 0, scale: 0.5}, 0.15);    
    
    var arrowDisappearScene = new ScrollMagic.Scene({
        triggerElement: '#arrow-group',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
    })
    .setTween(arrowTween)
    .setClassToggle('#arrow-group', 'disable-arrows') //disables arrows after disappearance
    .addTo(controller);
    
    /*----- Flexbox & content animations -----*/
    var twoFlexBoxScene = new ScrollMagic.Scene({
        triggerElement: '.scrollmagic-two-target',
        triggerHook: 0.85,
        offset: 0,
        reverse: false
    })
    .setClassToggle('.scrollmagic-two-target', 'come-to-center')
    .addTo(controller);
    
    $('.scrollmagic-enter-from-right').each(function(){
        var enterFromRightScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.85,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'come-to-center')
        .addTo(controller);
    })
    
    $('.scrollmagic-enter-from-left').each(function(){
        var enterFromLeftScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.85,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'come-to-center')
        .addTo(controller);
    })

    
    $('.scrollmagic-scale-flex-box').each(function(){
        var scaleFlexBoxScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.95,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'shrink-on-appear')
        .addTo(controller);
    })
    
    /*----- navbar shrink-in animations -----*/    
    var navTween = TweenMax.staggerFrom(".navbar li", 0.6, { ease:  Power0.easeNone, opacity: 0, x:100, scale: 2}, 0.3);
    
    var navItemsAppearScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0.95,
        offset: 0,
        reverse: false
    })
    .setTween(navTween)
    .addTo(controller);
    
    //var windowWidth = window.innerWidth;
    //var windowHeight = window.innerHeight;
        
    /* ----Background Scroll animations -----*/    
    var introDiv1ParallaxTween = TweenMax.to('.intro-div-1', 1, {
      backgroundSize: '+=250px +=166.7px', 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	
	var introDiv1Parallaxscene = new ScrollMagic.Scene({
        triggerElement: '#trigger', 
        duration: "100%"
    })
    .setTween(introDiv1ParallaxTween)
    .addTo(controller);
    
    var introDiv3ParallaxTween = TweenMax.to(".intro-div-3", 1, {
        backgroundPositionX: "-=50%", 
        autoRound:false, 
        ease:Power1.ease0ut
    });

	var introDiv3ParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.intro-div-3', 
        triggerHook: 1, 
        duration: "150%"
    })
    .setTween(introDiv3ParallaxTween) 
    .addTo(controller);
    
    //If the browser isn't IE10 or Edge...
    if (!(/MSIE 10/i.test(navigator.userAgent)) && !(/Edge\/\d./i.test(navigator.userAgent))){
    
        var introDiv4ParallaxTween = TweenMax.to(".intro-div-4", 1, {
            backgroundSize: "+=500px +=281.25px", 
            backgroundPositionX: "-=300px",
            autoRound:false, 
            ease:Power1.ease0ut
        });
	
        var introDiv4ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".intro-div-4", 
            triggerHook: 1, 
            autoRound:false,
            duration: "150%"
        })
    
        .setTween(introDiv4ParallaxTween)
        .addTo(controller);
        
        var specs1ParallaxTween = TweenMax.from(".specs-div-1", 1, {
            backgroundSize: "+=200px +=112.96875px",
            backgroundPositionX: "-=100px",
            autoRound:false, 
            ease:Power0.ease0ut
        });


        var specs1ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".specs-div-1", 
            triggerHook: 1, 
            autoRound: false,
            duration: "150%"
        })

        .setTween(specs1ParallaxTween)
        .addTo(controller);

        var specs3ParallaxTween = TweenMax.from(".specs-div-3", 1, {
          backgroundSize: "+=200px +=149.84px", 
          autoRound:false, 
          ease:Power1.ease0ut
        });


        var specs3ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".specs-div-3", 
            triggerHook: 1, 
            duration: "150%"
        })
        .setTween(specs3ParallaxTween)
        .addTo(controller);
    }
    
    
    
    /*----- Navbar highlight animations -----*/    
    var performanceHighlightScene = new ScrollMagic.Scene({
        triggerElement: ".performance-div-1",
        triggerHook: 0.5,
        duration: heightOfPerformance
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(2)", "active") // add class toggle
    .addTo(controller);
    
	var exteriorHighlightScene = new ScrollMagic.Scene({
        triggerElement: ".exterior-div-1",
        triggerHook: 0.5,
        duration: heightOfExterior
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(3)", "active") // add class toggle
    .addTo(controller);
    
	var interiorHighlightScene = new ScrollMagic.Scene({
        triggerElement: ".interior-div-1",
        triggerHook: 0.5,
        duration: heightOfInterior
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active") // add class toggle
    .addTo(controller);
    
	var specsHighlightScene = new ScrollMagic.Scene({
        triggerElement: ".specs-div-2",
        triggerHook: 0.15,
        duration: heightOfSpecs
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active") // add class toggle
    .addTo(controller);
})
