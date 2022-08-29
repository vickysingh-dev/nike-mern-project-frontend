import React from "react";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import '../../home_css/homepage/Navbar.css';

function Navbar() {
    return (
        <div className="Navbar-display">
            <div className="brand-logo"></div>
            <div className="navbar-links">
                <ul>
                    <a href={"/men"}><li>Men</li></a>
                    <a href={"/women"}><li>Women</li></a>
                    <a href={"/kids"}><li>Kids</li></a>
                    <a href={"/sale"}><li>Sale</li></a>
                    <a href={"/shoes"}><li>Shoes</li></a>
                </ul>
            </div>
            <div className="navbar-cart">
                <a href={"/signin"} className="sign"><IoPersonOutline /></a>
                <a href={"#"} className="cart"><IoBagHandleOutline /></a>
            </div>
        </div>
    )
}

export default Navbar;