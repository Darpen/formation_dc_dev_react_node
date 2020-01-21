import React, { Component } from "react";
import "../css/header.css";
import homelogo from "../images/home.png";

class Header extends Component {
    render(){
        return(
            <header>
                <div><img className="homeLogo" src={homelogo} alt="home logo"></img></div>
                <h1>Moon List</h1>
                <div>Admin</div>
            </header>
        )
    }
}

export default Header;

