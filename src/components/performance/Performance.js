import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';


class Performance extends Component {
    render() {
        return(
        <div>
            <div className="Six" id="Performance">
                <div className="container">
                    <div className="row">
                        <h1 className="scrollmagic-enter-from-right">Performance</h1>
                        <p className="col-xs-10 col-xs-offset-2 text-center col-md-4 col-md-offset-8 text-right col-lg-4 col-lg-offset-8 text-right scrollmagic-enter-from-right"> "With 0.99 g worth of grip available, quick and responsive steering, and front buckets that comfortably restrain the occupants, the BMW M2 is a 200-proof driving elixir."<br/><br/>&#160;&#160;&#160;- Car And Driver</p>
                    </div>
                </div>
            </div>
            <div className="Six-blurred">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="inline6">Legendary N55 inline 6 engine</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="differential">Active M Differential</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="valvetronic">Double VANOS & VALVETRONIC</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="5050">Near 50:50 weight distribution</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="manual">Manual Transmission</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="exhaust">M-tuned exhaust & brakes</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="dct">Available 7-speed DCT with Drivelogic</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="launch">Launch Control</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="axles">M4-Derived Front & Rear Axles</li>
                    <li className="flex-item scrollmagic-scale-flex-box" data-tip data-for="redline">7000rpm redline</li>
                </ul>
            </div>
            <ReactTooltip id="inline6" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">With 365hp on tap.</span>
            </ReactTooltip>
            <ReactTooltip id="differential" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">The M2's actuve differential greatly<br/> improves traction & handling.</span>
            </ReactTooltip>
            <ReactTooltip id="valvetronic" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">Both technologies allow infinite adjustment<br/> of the intake valve timing and duration,<br/> improving fuel economy and emissions.</span>
            </ReactTooltip>
            <ReactTooltip id="5050" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">The M2's perfect 50% front/50% rear <br/>weight distribution gives it perfect<br/> handling characteristics.</span>
            </ReactTooltip>
            <ReactTooltip id="manual" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">Only purists need apply.</span>
            </ReactTooltip>
            <ReactTooltip id="exhaust" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">A bad soundtrack does not<br/> a good sportcar make. </span>
            </ReactTooltip>
            <ReactTooltip id="dct" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">The optional DCT gives the M2 faster<br/> shifts & improved fuel economy.</span>
            </ReactTooltip>
            <ReactTooltip id="launch" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">Making optimal use of traction, the<br/>M2's launch control allows it to rocket<br/> to 60 mph in nearly 4 seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="axles" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">The M2 borrows mutliple suspension &<br/> chassis components from the BMW M4.</span>
            </ReactTooltip>
            <ReactTooltip id="redline" place="top" type="dark" effect="solid" delayShow={300}>
                <span className="tooltip-span">Drama? &#10004; Check</span>
            </ReactTooltip>
        </div>
        );
    }
}

export default Performance;
