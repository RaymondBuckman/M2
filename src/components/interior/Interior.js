import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';


class Interior extends Component {
    render() {
        return(
        <div>
            <div className="Interior-1" id="Interior">
                <div className="container">
                    <div className="row">
                        <h1 className="scrollmagic-enter-from-left" role="heading" tabIndex="0">Interior</h1>
                        <p className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 scrollmagic-enter-from-left"><q>The M2 has raw carbon fibre, not set in any resin, around the door pulls and centre console. It’s a nice departure from the usual, shiny carbon and looks pleasantly understated.</q><br/><br/>- Evo<br/><a href="http://www.evo.co.uk/bmw/m2" target="_blank" role="link" aria-label="Read more about Evo's review">Read more...</a></p>
                    </div>
                </div>
            </div>
            <div className="Interior-2">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-scale-flex-box" 
                    data-tip data-for="upholstery" aria-describedby="upholstery">
                        Black Dakota leather upholstery with blue highlight
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="steering-wheel" aria-describedby="steering-wheel">
                        Leather wrapped multifunction M steering wheel
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="trim" aria-describedby="trim">
                        Open pore carbon fiber trim
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="cockpit" aria-describedby="cockpit">
                        Driver oriented cockpit with anthracite headliner
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="elements" aria-describedby="elements">
                        M door-sill finishers, footrest, & other design elements
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="rev-matching" aria-describedby="rev-matching">
                        Rev matching (with 6-speed manual)
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="idrive" aria-describedby="idrive">
                        iDrive with optional Apple CarPlay compatibility
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="paddle-shifters" aria-describedby="paddle-shifters">
                        Aluminum paddle shfters (with Optional DCT)
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="online" aria-describedby="online">
                        BMW Online with MyInfo and BMW Apps
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="harmon-kardon" aria-describedby="harmon-kardon">
                        360 watt Harman Kardon® sound system
                    </li>
                </ul>
            </div>
            <ReactTooltip id="upholstery" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Special touches for a special car.</span>
            </ReactTooltip>
            <ReactTooltip id="steering-wheel" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Never have to (or want to) take<br/> your hands off the wheel.</span>
            </ReactTooltip>
            <ReactTooltip id="trim" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Matte carbon fiber trim adds a<br/> unique feel to the interior ambiance.</span>
            </ReactTooltip>
            <ReactTooltip id="cockpit" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Let nothing distract you from the road.</span>
            </ReactTooltip>
            <ReactTooltip id="elements" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Little reminders that you<br/> bought something special.</span>
            </ReactTooltip>
            <ReactTooltip id="rev-matching" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Allows smooth transitions<br/> while downshifting.</span>
            </ReactTooltip>
            <ReactTooltip id="idrive" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">The best infotainment system in<br/> the industy is at your disposal.</span>
            </ReactTooltip>
            <ReactTooltip id="paddle-shifters" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Cool-to-the-touch aluminum<br/> paddle shifters allow your<br/> hands to stay on the wheel.</span>
            </ReactTooltip>
            <ReactTooltip id="online" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Access news, weather, & other info.</span>
            </ReactTooltip>
            <ReactTooltip id="harmon-kardon" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">For those rare times when the<br/> exhaust note won't suffice.</span>
            </ReactTooltip>
        </div>
        );
    }
}

export default Interior;
