import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
        <div className="Twelve"> 
            <div className="container">
                <div className="row">
                    <a href="https://www.bmwusa.com/byo.html#!/build/color/dgnkcwwn" target="_blank"
                     role="link" className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">  
                        Build & Price
                    </a>
                    <a href="https://www.bmwusa.com/contact/dealer.html" target="_blank"
                    role="link" className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">
                        Contact a Dealer
                    </a>
                    <a href="https://www.bmw-motorsport.com/en/home.html" target="_blank" 
                    role="link" className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">
                        BMW Motorsport
                    </a> 
                    <a href="http://www.simonpuschmann.com/portfolio/" target="_blank"
                     role="link" className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">
                        Images from simonpuschmann.com
                    </a> 
                </div>
            </div>
        </div>           
        );
    }
}

export default Footer;
