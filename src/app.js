const css = require('./app.scss');
import Icon from './img/bmw.ico';
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';

import React from 'react';
import ReactDOM from 'react-dom';
//import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Performance from'./components/performance/Performance';
import Exterior from './components/exterior/Exterior';
import Interior from './components/interior/Interior';
import Specs from './components/specs/Specs';
import Footer from './components/footer/Footer';
import $ from "jquery";

ReactDOM.render(
    <div className="App" data-spy="scroll"
        data-target=".navbar-default" data-offset="450">
            <Icon glyph="star" />
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
    
    var controller = new ScrollMagic.Controller();
    
    var pinTopNavScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0,
        duration: '.App'
    })
    .setPin('.navbar')
    .addTo(controller);
    
    var changeTopNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.Ten',
        triggerHook: 0.5,
        duration: '270%'
    })
    .setClassToggle('.navbar', 'black-nav')
    .addTo(controller);
    
    var arrowTween = TweenMax.staggerTo("#arrow-group img", 0.2, { ease:  Power0.easeNone, opacity: 0, scale: 0.5}, 0.2);
    
    var arrowDisappearScene = new ScrollMagic.Scene({
        triggerElement: '#arrow-group',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
    })
    .setTween(arrowTween)
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
    
    var navTween = TweenMax.staggerFrom(".navbar li", 0.6, { ease:  Power0.easeNone, opacity: 0, x:100, scale: 2}, 0.4);
    
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
    
    console.log(`width is ${windowWidth} & the height is ${windowHeight}.`);
    
    // build tween
    /*
	var oneParallaxTween = TweenMax.fromTo(".One", 1, 
    {
        backgroundSize: '${windowWidth}px ${windowWidth*.6668}px',
        ease: Linear.easeNone
    },
    {
        backgroundSize: "+=25% +=25%", 
        ease: Linear.easeNone
    });*/
    
    var oneParallaxTween = TweenMax.to(".One", 1, {
      backgroundSize: "+=250px +=166.7px", 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	// build scene and set duration to window height
	var oneParallaxscene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "100%"})
					.setTween(oneParallaxTween)
					//.addIndicators()
					.addTo(controller);
    
    var threeParallaxTween = TweenMax.to(".Three", 1, {
      backgroundPositionX: "-=50%", 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	// build scene and set duration to window height
	var threeParallaxScene = new ScrollMagic.Scene({triggerElement: ".Three", triggerHook: 1, duration: "150%"})
					.setTween(threeParallaxTween)
					//.addIndicators() 
					.addTo(controller);
    
    var fourParallaxTween = TweenMax.to(".Four", 1, {
      backgroundSize: "+=500px +=281.25px", 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	// build scene and set duration to window height
	var fourParallaxScene = new ScrollMagic.Scene({triggerElement: ".Four", triggerHook: 1, duration: "150%"})
					.setTween(fourParallaxTween)
					//.addIndicators()
					.addTo(controller);
    
    var elevenParallaxTween = TweenMax.from(".Eleven", 1, {
      backgroundSize: "+=200px +=149.84px", 
      autoRound:false, 
      ease:Power1.ease0ut
    });

	// build scene and set duration to window height
	var elevenParallaxScene = new ScrollMagic.Scene({triggerElement: ".Eleven", triggerHook: 1, duration: "102%"})
					.setTween(elevenParallaxTween)
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
})
