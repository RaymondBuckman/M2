import React, { Component } from 'react';
import arrowRed from '../../img/arrow-red.png';
import arrowLightBlue from '../../img/arrow-light-blue.png';
import arrowDarkBlue from '../../img/arrow-dark-blue.png';
import $ from "jquery";
//import Draggable from "gsap/Draggable";


class Intro extends Component {
    render() {
        return(
        <div>
            <div className="One">
              <div id="arrow-group">
                <img src={arrowLightBlue} height={"30"} width={"70"}/> 
                <img src={arrowDarkBlue} height={"30"} width={"70"}/>
                <img src={arrowRed} height={"30"} width={"70"}/>
              </div>
              <h1 id="title">BMW M2</h1>
              <h2 id="slogan">Freude am Fahren</h2>
            </div>
            <div className="Two">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1>Pure Adrenaline</h1><br/>
                        <p><b>As the newest addition to the M lineup, nothing defines the legacy of legendary performance better than the first-ever BMW M2 Coupe.</b> With four decades of high performance in its DNA, it continues to push the limits even further – delivering a perfected formula of chassis balance, steering response, and power-to-weight ratio. In short, it’s everything that makes BMW the Ultimate Driving Machine.</p>
                    </li>
                    <li className="flex-item">
                        <p><span>7:58</span> N&#252;rburgring Time</p>
                        <p><span>4.1</span> &#160;&#160;0-60 mph (in seconds)</p>
                        <p><span>365</span>&#160; horsepower</p>
                    </li>
                </ul>
            </div>
            <div className="Three"></div>
            <div className="Four">
                <h1>Exclusive color: Long Beach Blue Metallic</h1>
            </div>
            <nav className="navbar navbar-default visible-lg" data-spy="affix" role="navigation">
                <div className="container">
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="#">invis</a></li>
                        <li><a href="#Performance">Performance</a></li>
                        <li><a href="#Exterior">Exterior</a></li>
                        <li><a href="#Interior">Interior</a></li>
                        <li><a href="#Specs">Specs</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
}

export default Intro;
