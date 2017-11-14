import React, { Component } from 'react';
import arrowRed from '../../img/arrow-red.png';
import arrowLightBlue from '../../img/arrow-light-blue.png';
import arrowDarkBlue from '../../img/arrow-dark-blue.png';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import mLogo from '../../img/BMW-M.png';

class Intro extends Component {
    render() {
        return(
        <div>
            <div className="Intro-1">
                <a href="https://www.bmwusa.com/vehicles/m.html" target="_blank"><img id="m-logo" src={mLogo} height="25px" data-tip data-for="m-logo" aria-describedby="m-logo"></img></a>
                <div className="container-fluid">
                    <div className="row">
                        <div id="arrow-group" className="col-lg-1 col-lg-offset-0 hidden-xs" data-tip data-for="scroll-down" aria-describedby="scroll-down">
                            <img src={arrowLightBlue} height={"25"} width={"60"}/>
                            <img src={arrowDarkBlue} height={"25"} width={"60"}/>
                            <img src={arrowRed} height={"25"} width={"60"}/>
                        </div>
                        <h1 id="title" className="col-xs-12 col-xs-offset-0 col-lg-7 col-lg-offset-1 text-right" role="heading">BMW M2</h1>
                        <h2 id="slogan" className="col-xs-12 col-xs-offset-0 col-lg-4 col-lg-offset-8 text-right">Freude am Fahren</h2>
                    </div>
                </div>
            </div>
            <div className="Intro-2" id="arrow-dest">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-two-target">
                        <h1>Pure Adrenaline</h1><br/>
                        <p><b>As the newest addition to the M lineup, nothing defines the legacy of legendary performance better than the first-ever BMW M2 Coupe.</b> With four decades of high performance in its DNA, it continues to push the limits even further – delivering a perfected formula of chassis balance, steering response, and power-to-weight ratio. In short, it’s everything that makes BMW the Ultimate Driving Machine.</p>
                    </li>
                    <li className="flex-item scrollmagic-two-target">
                        <p><span>7:58</span> N&#252;rburgring Time</p>
                        <p><span>4.1</span> &#160;&#160;0-60 mph (in seconds)</p>
                        <p><span>365</span>&#160; horsepower</p>
                    </li>
                </ul>
            </div>
            <div className="Intro-3"></div>
            <div className="Intro-4">
                <h1>Exclusive color: Long Beach Blue Metallic</h1>
            </div>
            <nav className="navbar navbar-default visible-lg" role="navigation">
                <div className="container-fluid">
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="#" data-tip data-for="bmw-logo" aria-describedby="bmw-logo">invis</a></li>
                        <li><a href="#Performance">Performance</a></li>
                        <li><a href="#Exterior">Exterior</a></li>
                        <li><a href="#Interior">Interior</a></li>
                        <li><a href="#Specs">Specs</a></li>
                    </ul>
                </div>
            </nav>
            <ReactTooltip id="m-logo" place="bottom" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Go to BMW M website</span>
            </ReactTooltip>
            <ReactTooltip id="scroll-down" place="right" type="dark"
            effect="solid" delayShow={50} role="tooltip">
                <span className="tooltip-span">Scroll down</span>
            </ReactTooltip>
            <ReactTooltip id="bmw-logo" place="bottom" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Top of<br/> page</span>
            </ReactTooltip>
        </div>
        );
    }
}

export default Intro;
