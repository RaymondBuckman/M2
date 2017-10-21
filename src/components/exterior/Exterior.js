import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';


class Exterior extends Component {
    render() {
        return(
        <div>
            <div className="Seven" id="Exterior">
                <div className="container">   
                    <div className="row">
                        <h1 className="scrollmagic-enter-from-left" role="heading" tabIndex="0">Exterior</h1>
                        <p className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 scrollmagic-enter-from-left"><q>It goes without staying (see what I did there?) that we love how the compact two-door looks ready to pounce, with its muscular, blistered fenders, and ready to suck the lane markers off the road with all those air intakes, cooling ports, and grille.</q><br/><br/>- MotorTrend<br/>
                        <a href="http://www.motortrend.com/cars/bmw/m2/2017/2017-bmw-m2-long-term-arrival-good-gets/" target="_blank" role="link" aria-label="Read more about Motortrend's review">Read more...</a></p>
                    </div>
                </div>
            </div>
            <div className="Seven-blurred">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip 
                    data-for="grille" aria-describedby="grille">
                        Kidney grille with and M2 designation
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="spoiler" aria-describedby="spoiler">
                        M rear spoiler
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box" 
                    data-tip data-for="pipes" aria-describedby="pipes">
                        Center-aligned Quad Exhaust Pipes
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box" 
                    data-tip data-for="gill" aria-describedby="gill">
                        M side gill with M2 badging
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="paint" aria-describedby="paint">
                        4 Paint Options (incl. Long Beach Metallic)
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="wheels" aria-describedby="wheels">
                        Double Spoke forged alloy wheels
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="shadowline" aria-describedby="shadowline">
                        Shadowline Exterior Trim
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="bumpers" aria-describedby="bumpers">
                        M Specific front & rear bumpers
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="calipers" aria-describedby="calipers">
                        Blue Brake Calipers
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="fenders" aria-describedby="fenders">
                        Extra Wide Rear Fenders
                    </li>
                </ul>
            </div>
            <ReactTooltip id="grille" place="top" type="dark" 
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">This is no ordinary 2-series.</span>
            </ReactTooltip>
            <ReactTooltip id="spoiler" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Provides extra downforce at high speed.</span>
            </ReactTooltip>
            <ReactTooltip id="pipes" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">The more, the merrier.</span>
            </ReactTooltip>
            <ReactTooltip id="gill" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Highlights the power<br/> lurking under the bonnet.</span>
            </ReactTooltip>
            <ReactTooltip id="paint" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Paint choices include:<br/> Alphine White<br/> Black Sapphire Metallic<br/> Mineral Gray Metallic<br/> Long Beach Blue Metallic.</span>
            </ReactTooltip>
            <ReactTooltip id="wheels" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">M-specific wheels give<br/> the M2 a special touch.</span>
            </ReactTooltip>
            <ReactTooltip id="shadowline" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">To emphasize the M2's sporty<br/> character, use of chrome is<br/> minimized on the exterior styling.</span>
            </ReactTooltip>
            <ReactTooltip id="bumpers" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">The M2 gets its own unique<br/> ground effects kit.</span>
            </ReactTooltip>
            <ReactTooltip id="calipers" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">The unique blue brake calipers<br/> stress the extra stopping<br/> power of the M2's brakes.</span>
            </ReactTooltip>
            <ReactTooltip id="fenders" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Gives the M2 an agreesive, hunkered<br/> down stance from the rear.</span>
            </ReactTooltip>
        </div>
        );
    }
}

export default Exterior;
