import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component {
    render() {
        return(
        <div className="top"> 
            <img src={logo} id="App-logo" alt="logo"/>
        </div>           
        );
    }
}

export default Header;