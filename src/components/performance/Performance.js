import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';


class Performance extends Component {
    render() {
        return(
        <div>
            <div className="Performance-1" id="Performance">
                <div className="container">
                    <div className="row">
                        <h1 className="scrollmagic-enter-from-right" role="heading" tabIndex="0">Performance</h1>
                        <p className="col-xs-10 col-xs-offset-2 text-center col-md-4 col-md-offset-8 text-right col-lg-4 col-lg-offset-8 text-right scrollmagic-enter-from-right"> <q>With 0.99 g worth of grip available, quick and responsive steering, and front buckets that comfortably restrain the occupants, the BMW M2 is a 200-proof driving elixir.</q><br/><br/>&#160;&#160;&#160;- Car And Driver<br/><a href="https://www.caranddriver.com/reviews/2016-bmw-m2-automatic-test-review" target="_blank" role="link" aria-label="Read more about Car and Driver's review">Read more...</a></p>
                        
                    </div>
                </div>
            </div>
            <div className="Performance-2">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="inline6" aria-describedby="inline6">
                        Legendary N55 inline 6 engine
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="differential" aria-describedby="differential">
                        Active M Differential
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="valvetronic" aria-describedby="valvetronic">
                        Double VANOS & VALVETRONIC
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="5050" aria-describedby="5050">
                        Near 50:50 weight distribution
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="manual" aria-describedby="manual">
                        Manual Transmission
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="exhaust" aria-describedby="exhaust">
                        M-tuned exhaust & brakes
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="dct" aria-describedby="dct">
                        Available 7-speed DCT with Drivelogic
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="launch" aria-describedby="launch">
                        Launch Control
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="axles" aria-describedby="axles">
                        M4-Derived Front & Rear Axles
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box"
                    data-tip data-for="redline" aria-describedby="redline">
                        7000rpm redline
                    </li>
                </ul>
            </div>
            <ReactTooltip id="inline6" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">With 365hp on tap, the only<br/> limitation is your right foot.</span>
            </ReactTooltip>
            <ReactTooltip id="differential" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">The M2's actuve differential greatly<br/> improves traction & handling.</span>
            </ReactTooltip>
            <ReactTooltip id="valvetronic" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Both technologies allow infinite adjustment<br/> of the intake valve timing and duration,<br/> improving fuel economy and emissions.</span>
            </ReactTooltip>
            <ReactTooltip id="5050" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">50% front/50% rear weight<br/> distribution gives the M2<br/> perfect handling characteristics.</span>
            </ReactTooltip>
            <ReactTooltip id="manual" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Only purists need apply.</span>
            </ReactTooltip>
            <ReactTooltip id="exhaust" place="top" type="dark" 
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">A bad soundtrack does not<br/> a good sportcar make. </span>
            </ReactTooltip>
            <ReactTooltip id="dct" place="top" type="dark" 
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">The optional DCT gives the M2 faster<br/> shifts & improved fuel economy.</span>
            </ReactTooltip>
            <ReactTooltip id="launch" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Making optimal use of traction, the<br/>M2's launch control allows it to rocket<br/> to 60 mph in nearly 4 seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="axles" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">The M2 borrows mutliple suspension &<br/> chassis components from the BMW M4.</span>
            </ReactTooltip>
            <ReactTooltip id="redline" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Drama? <span className="check">&#10004;</span> Check</span>
            </ReactTooltip>
        </div>
        );
    }
}

export default Performance;
