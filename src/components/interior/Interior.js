import React, { Component } from 'react';


class Interior extends Component {
    render() {
        return(
        <div>
            <div className="Eight" id="Interior">
                <div className="container">
                    <div className="row">
                        <h1>Interior</h1>
                        <p className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">"The M2 has ‘raw’ carbon fibre, not set in any resin, around the door pulls and centre console. It’s a nice departure from the usual, shiny carbon and looks pleasantly understated."<br/><br/>- Evo</p>
                    </div>
                </div>
            </div>
            <div className="Eight-blurred">
                <ul className="flex-container">
                    <li className="flex-item">Black Dakota leather upholstery with blue highlight</li>
                    <li className="flex-item">Leather wrapped multifunction M steering wheel</li>
                    <li className="flex-item">Open pore carbon fiber trim</li>
                    <li className="flex-item">Driver oriented cockpit with anthracite headliner</li>
                    <li className="flex-item">M door-sill finishers, footrest, & other design elements</li>
                    <li className="flex-item">Rev matching (with 6-speed manual)</li>
                    <li className="flex-item">iDrive with optional Apple CarPlay compatibility</li>
                    <li className="flex-item">Aluminum paddle shfters (with Optional DCT)</li>
                    <li className="flex-item">BMW Online with MyInfo and BMW Apps</li>
                    <li className="flex-item">360 watt Harman Kardon® sound system</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Interior;