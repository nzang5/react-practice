import React from "react";
import logo from '../img/react-logo.png'

console.log(logo)

function Navbar(){

    return(
        <div className="navbar">
            <img src={logo} alt="logo"></img>
            <ul>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;