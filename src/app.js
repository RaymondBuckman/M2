const css = require('./app.scss');
import Icon from './img/bmw.ico';

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
    
        if(wScroll < 1875){
            $('.navbar').removeClass('fixedheader');
        }
    
        else if(wScroll > 1875 && wScroll < 5780){
            //$('.Five').removeClass('fixedheader');
            $('.navbar').addClass('fixedheader');
            $('.navbar').removeClass('unfixedheader');
        }
    
        else{
         $('.navbar').removeClass('fixedheader');
            $('.navbar').addClass('unfixedheader');
        }
    
        $('.Eleven').css({
            'background-size': 2500 - (wScroll/8) + 'px'
        })
        
        }
})
