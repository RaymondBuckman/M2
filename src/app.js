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
    //.setClassToggle('.navbar', 'black-nav')
    .addTo(controller);
    
    var changeTopNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.Ten',
        triggerHook: 0.5,
        duration: '270%'
    })
    .setClassToggle('.navbar', 'black-nav')
    .addTo(controller);
    
    var downArrowScene = new ScrollMagic.Scene({
        triggerElement: '#arrow-group',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
    })
    .setClassToggle('#arrow-group', 'fade-out')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var twoFlexBoxScene = new ScrollMagic.Scene({
        triggerElement: '.scrollmagic-two-target',
        triggerHook: 0.7,
        offset: 0,
        reverse: false
    })
    .setClassToggle('.scrollmagic-two-target', 'come-to-center')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    $('.scrollmagic-enter-from-right').each(function(){
        var sixEnterFromRightScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.5,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'come-to-center')

        /*
        .addIndicators({
            name: 'div fadeout',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })
    
    $('.scrollmagic-enter-from-left').each(function(){
        var sixEnterFromLeftScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.5,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'come-to-center')

        /*
        .addIndicators({
            name: 'div fadeout',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })

    
    $('.scrollmagic-scale-flex-box').each(function(){
        var scaleFlexBoxScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
            offset: 0,
            reverse: false
        })
        .setClassToggle(this, 'shrink-on-appear')

        /*
        .addIndicators({
            name: 'div fadeout',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })
})


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    var largeDesktop = window.matchMedia( "(min-width: 1400px)" );
     
    
    if(largeDesktop.matches){   
        
        $('.One, .Header').css({
            'background-size':  (1600 + (wScroll/3)) + 'px'
        })
    
        $('.Three').css({
            'background-position': + (90+ wScroll/-50) + "% 50%"
        })
    
        $('.Four').css({
            'background-size':  (1300 + (wScroll/2.4)) + 'px'
        })
    
        $('.Eleven').css({
            'background-size': 2500 - (wScroll/8) + 'px'
        })
        
        }
})
