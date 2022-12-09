import React from "react";
import logo from '../img/react-logo.png'

console.log(logo)

function Navbar(){

    return(
        <div>
            <img src={logo} alt="logo"></img>
        </div>
    )
}

export default Navbar;