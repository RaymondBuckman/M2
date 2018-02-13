import React, { Component } from 'react';
import $ from "jquery";


export default class Specs extends Component {
    render() {
        function showExecutivePackageDropdown(e){
            e.stopPropagation();
            $('#executive-package-list').toggle();
        }
        
        function showMDriversPackageDropdown(e){
            e.stopPropagation();
            $('#m-drivers-package-desc').toggle(); 
        }
        
        function stopPropagation(e){
            e.stopPropagation();            
        }
        
        return(
        <div>
            <div className="specs-div-1">
                <h1>The Most Powerful Letter in the World</h1>    
            </div>
            <div className="specs-div-2" id="Specs">
                <ul className="flex-container">
                    <li className="flex-item" role="heading">Specifications</li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header role="heading">Engine</header><br/>
                        3.0 liter M TwinPower Turbo inline 6<br/>
                        Displacement - 2979cc<br/>
                        Horsepower - 365 hp @ 6500 rpm<br/>
                        Torque - 343 lb-ft @ 1400-5560 rpm<br/>
                        Compression ratio - 10.2
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header role="heading">Transmission</header><br/>
                        Standard - 6 speed manual<br/>
                        Manual ratios (I/II/III) - 4.11 / 2.32 / 1.54<br/>
                        Manual ratios (IV/V/VI/R) - 1.18 / 1.00 / .85 / 3.73<br/>
                        Manual final drive radio - 3.46<br/>
                        Auto ratios (I/II/III) - 4.81 / 2.59 / 1.70<br/>
                        Auto ratios (IV/V/VI) - 1.28 / 1.00 / 0.84<br/>
                        Auto ratios (VII/R) - 0.67 / 4.17<br/>
                        Auto final drive ratio - 3.46<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header role="heading">Exterior Dimensions</header><br/>
                        Length - 176.2 in<br/>
                        Wheelbase - 106.0 in<br/>
                        Width - 73.0 in<br/>
                        Height - 55.5 in<br/>
                        Ground Clearance - 4.8 in <br/>
                        Weight (manual) - 3450 lbs<br/>
                        Weight (DCT) - 3505 lbs<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header role="heading">Interior Dimensions</header><br/>
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
                        <header role="heading">Fuel Economy</header><br/>
                        Manual Combined (mpg) - 21<br/>
                        Manual City/Highway (mpg) - 18/26<br/>
                        Automatic Combined (mpg) - 22<br/>
                        Automatic CIty/Highway (mpg) - 20/26<br/>
                        Fuel Tank Capacity (gal) - 13.7<br/>
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header role="heading">Performance</header><br/>
                        0-60 (manual) - 4.3 seconds <br/>
                        0-60 (automatic) - 4.1 seconds<br/>
                        Top Speed - 155 mph (168 unrestricted)
                    </li>
                    <li className="flex-item scrollmagic-scale-flex-box">
                        <header role="heading">Standard Features</header><br/>
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
                        <header role="heading">Options</header><br/>
                        <span id="executive-package" onClick={showExecutivePackageDropdown}>Executive Package - $1,400 <span id="executive-arrow">&#9663;</span></span><br/>
                        <ul id="executive-package-list" onClick={stopPropagation}>
                            <li><span className="check">&#10004;</span> Heated Steering Wheel</li>
                            <li><span className="check">&#10004;</span>  Automatic High Beams</li>
                            <li><span className="check">&#10004;</span> Active Driving Assistant</li>
                            <li><span className="check">&#10004;</span> Wireless Charging & Wifi</li>
                            <li><span className="check">&#10004;</span> Park Distance Control</li>
                        </ul>
                        <span id="m-drivers-package" onClick={showMDriversPackageDropdown}>M Driver's Package - $2,500 <span id="m-drivers-arrow">&#9663;</span></span><br/>
                        <p id="m-drivers-package-desc" onClick={stopPropagation}>A 1-day high performance driving class which is tailored to BMW M vehicles through various exercises on a racetrack, allowing you to explore the limits of the vehicle in a controlled environment.</p>
                        M Double-clutch Transmission - $2,900<br/>
                        Apple CarPlay Compatibility - $300<br/>
                    </li>
                </ul>    
            </div>
            <div className="specs-div-3"> 
                <h1>What are you waiting for?</h1>
            </div>
        </div>
        );
    }
}
