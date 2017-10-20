import React, { Component } from 'react';


class Specs extends Component {
    render() {
        return(
        <div>
            <div className="Nine">
                <h1>The Most Powerful Letter in the World</h1>    
            </div>
            <div className="Ten" id="Specs">
                <ul className="flex-container">
                    <li className="flex-item" role="heading">Specifications</li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Engine</header><br/>
                        Liters/Type - 3.0 liter M TwinPower Turbo inline 6<br/>
                        Displacement - 2979cc<br/>
                        Horsepower - 365 hp @ 6500 rpm<br/>
                        Torque - 343 lb-ft @ 1400-5560 rpm<br/>
                        Compression ratio - 10.2
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Transmission</header><br/>
                        Standard - 6 speed manual<br/>
                        Manual ratios (I/II/III) - 4.11 / 2.32 / 1.54<br/>
                        Manual ratios (IV/V/VI/R) - 1.18 / 1.00 / 0.85 / 3.73<br/>
                        Manual final drive radio - 3.46<br/>
                        Auto ratios (I/II/III) - 4.81 / 2.59 / 1.70<br/>
                        Auto ratios (IV/V/VI) - 1.28 / 1.00 / 0.84<br/>
                        Auto ratios (VII/R) - 0.67 / 4.17<br/>
                        Auto final drive ratio - 3.46<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Exterior Dimensions</header><br/>
                        Length - 176.2 in<br/>
                        Wheelbase - 106.0 in<br/>
                        Width - 73.0 in<br/>
                        Height - 55.5 in<br/>
                        Ground Clearance - 4.8 in <br/>
                        Weight (manual) - 3450 lbs<br/>
                        Weight (DCT) - 3505 lbs<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Interior Dimensions</header><br/>
                        Headroom (front)- 40.1 in<br/>
                        Headroom (rear) - 36.5 in<br/>
                        Legroom (front) - 41.5 in<br/>
                        Legroom (rear) - 33.0 in<br/>
                        Shoulder room (front) - 54.4 in <br/>
                        Shoulder room (front) - 53.4 in<br/>
                        Passenger Volume - 89.0 cu ft<br />
                        Cargo Volume - 14.0 cu ft<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Fuel Economy</header><br/>
                        Manual Combined (mpg) - 21<br/>
                        Manual City/Highway (mpg) - 18/26<br/>
                        Automatic Combined (mpg) - 22<br/>
                        Automatic CIty/Highway (mpg) - 20/26<br/>
                        Fuel Tank Capacity (gal) - 13.7<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Performance</header><br/>
                        0-60 (manual) - 4.3 seconds <br/>
                        0-60 (automatic) - 4.1 seconds<br/>
                        Top Speed - 155 mph (168 unrestricted)
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Standard Features</header><br/>
                        14-way power front seats with 4-way lumbar<br/>
                        Memory system for seat & outside mirrors<br/>
                        Automatic climate control with micro-filter<br/>
                        Comfort Access keyless entry<br/>
                        Ambient Interior Lighting<br/>
                        3-stage heated front seats<br />
                        Dynamic Cruise Control<br/>
                        Advanced Real Time Traffic Information<br/>
                        SiriusXM  Radio with 1-year substription<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header>Options</header><br/>
                        <span id="executive-package">Executive Package - $1,400</span><br/>
                        <ul id="executive-package-list">
                            <li>Heated Steering Wheel</li>
                            <li>Automatic High Beams</li>
                            <li>Active Driving Assistant</li>
                            <li>Speed Limit Info</li>
                            <li>Wireless Charging & Wifi</li>
                            <li>Park Distance Control</li>
                        </ul>
                        M Driver's Package - $2,500<br/>
                        M Double-clutch Transmission - $2,900<br/>
                        Apple CarPlay Compatibility - $300<br/>
                    </li>
                </ul>    
            </div>
            <div className="Eleven"> 
                <h1>What are you waiting for?</h1>
            </div>
        </div>
        );
    }
}

export default Specs;
