import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
        <div className="Twelve"> 
            <div className="container">
                <div className="row">
                    <a href="#"><h2 className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">Build & Price</h2></a>
                    <a href="#"><h2 className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">Contact a Dealer</h2></a>
                    <a href="#"><h2 className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">BMW Motorsport</h2></a> 
                    <a href="http://www.simonpuschmann.com/portfolio/"><h2 className="col-xs-8 col-xs-offset-2 col-md-3 col-md-offset-0 text-center">Images from simonpuschmann.com</h2></a> 
                </div>
            </div>
        </div>           
        );
    }
}

export default Footer;