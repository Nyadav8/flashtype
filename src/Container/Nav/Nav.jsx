import React from "react";
import logo from '../../assets/logo.png';
import "./Nav.css";
const Nav=()=>{
    return(
        <div className="Ncontain">
            <div className="left">
                <img className="logo" src={logo} alt="logo" />
                <p className="flash-text">Flashtype</p>
                </div>
            <div className="right">
                <a href="https://www.linkedin.com/in/navneet-singh-367546170/" 
                target="_blank"
                className="navlink">Contact me</a>
                </div>
            </div>
    );
}
export default Nav;