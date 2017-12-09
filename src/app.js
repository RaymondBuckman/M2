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

ReactDOM.render(
    <div className="App">
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
        scrollTop: $(".Intro-2").offset().top
    }, 2000);
});

$(document).ready(function(){  
    var navbarHeightAsWindowPercentage = 50/$(window).height();
    
    /* Variables for nav highlight durations*/    
    var heightOfPerformance = $('.Exterior-1').offset().top - $('.Performance-1').offset().top;
    var heightOfExterior = $('.Interior-1').offset().top - $('.Exterior-1').offset().top;
    var heightOfInterior = $('.Specs-2').offset().top - $('.Interior-1').offset().top;
    var heightOfSpecs = $('.Specs-3').offset().top - $('.Specs-2').offset().top;
    
    /*----- Handles DropDown menus -----*/
    $('#executive-package').click( function(event){
        /* 
            Allows you to click on #executive-package without triggering document click event, which closes the dropdown
        */
        event.stopPropagation(); 
        $('#executive-package-list').toggle();
    });
    
     $('#executive-package-list').click( function(event){
        /* 
            Allows you to click on #executive-package-list without triggering document click event, which closes the dropdown
        */
        event.stopPropagation();
    });
    

    $(document).click( function(){
        $('#executive-package-list').hide();
    });
    
    $('#m-drivers-package').click( function(event){
        /* 
            Allows you to click on #executive-package without triggering document click event, which closes the dropdown
        */
        event.stopPropagation(); 
        $('#m-drivers-package-desc').toggle();
    });
    
     $('#m-drivers-package-desc').click( function(event){
        /* 
            Allows you to click on #executive-package-list without triggering document click event, which closes the dropdown
        */
        event.stopPropagation();
    });
    

    $(document).click( function(){
        $('#executive-package-list').hide();
        $('#m-drivers-package-desc').hide();
    });
    
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
        triggerElement: '.Performance-1',
        triggerHook: navbarHeightAsWindowPercentage
    })
    .setPin('.navbar')
    .addTo(controller);
    
    /*----- Nav color change & push-up animations -----*/
    var changeTopNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.Specs-2',
        triggerHook: 0.15,
        duration: heightOfSpecs
    })
    .setClassToggle('.navbar', 'black-nav')
    .addTo(controller);
    
    var pushNavUpTween = TweenMax.to(".navbar", 0.05, {
        y: "-=50px",
        autoRound: false
    });
    
    var pushNavUpScene = new ScrollMagic.Scene({
        triggerElement: '.Specs-3',
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
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
        
    /* ----Background Scroll animations -----*/    
    var intro1ParallaxTween = TweenMax.to(".Intro-1", 1, {
      backgroundSize: "+=250px +=166.7px", 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	
	var intro1Parallaxscene = new ScrollMagic.Scene({
        triggerElement: "#trigger", 
        duration: "100%"
    })
    .setTween(intro1ParallaxTween)
    .addTo(controller);
    
    var intro3ParallaxTween = TweenMax.to(".Intro-3", 1, {
        backgroundPositionX: "-=50%", 
        autoRound:false, 
        ease:Power1.ease0ut
    });

	var intro3ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-3", 
        triggerHook: 1, 
        duration: "150%"
    })
    .setTween(intro3ParallaxTween) 
    .addTo(controller);
    
    //If the browser isn't IE10 or Edge...
    if (!(/MSIE 10/i.test(navigator.userAgent)) && !(/Edge\/\d./i.test(navigator.userAgent))){
    
        var intro4ParallaxTween = TweenMax.to(".Intro-4", 1, {
            backgroundSize: "+=500px +=281.25px", 
            backgroundPositionX: "-=300px",
            autoRound:false, 
            ease:Power1.ease0ut
        });
	
        var intro4ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Intro-4", 
            triggerHook: 1, 
            autoRound:false,
            duration: "150%"
        })
    
        .setTween(intro4ParallaxTween)
        .addTo(controller);
        
        var specs1ParallaxTween = TweenMax.from(".Specs-1", 1, {
            backgroundSize: "+=200px +=112.96875px",
            backgroundPositionX: "-=100px",
            autoRound:false, 
            ease:Power0.ease0ut
        });


        var specs1ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Specs-1", 
            triggerHook: 1, 
            autoRound: false,
            duration: "150%"
        })

        .setTween(specs1ParallaxTween)
        .addTo(controller);

        var specs3ParallaxTween = TweenMax.from(".Specs-3", 1, {
          backgroundSize: "+=200px +=149.84px", 
          autoRound:false, 
          ease:Power1.ease0ut
        });


        var specs3ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Specs-3", 
            triggerHook: 1, 
            duration: "150%"
        })
        .setTween(specs3ParallaxTween)
        .addTo(controller);
    }
    
    
    
    /*----- Navbar highlight animations -----*/    
    new ScrollMagic.Scene({
        triggerElement: ".Performance-1",
        triggerHook: 0.5,
        duration: heightOfPerformance
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(2)", "active") // add class toggle
    .addTo(controller);
    
	new ScrollMagic.Scene({
        triggerElement: ".Exterior-1",
        triggerHook: 0.5,
        duration: heightOfExterior
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(3)", "active") // add class toggle
    .addTo(controller);
    
	new ScrollMagic.Scene({
        triggerElement: ".Interior-1",
        triggerHook: 0.5,
        duration: heightOfInterior
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active") // add class toggle
    .addTo(controller);
    
	new ScrollMagic.Scene({
        triggerElement: ".Specs-2",
        triggerHook: 0.15,
        duration: heightOfSpecs
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active") // add class toggle
    .addTo(controller);
})
