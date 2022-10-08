import React from "react";
import { NavLink } from "react-router-dom";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import "../../home_css/homepage/Navbar.css";

function Navbar() {
    return (
        <div className="Navbar-display">
            <div className="brand-logo"></div>
            <div className="navbar-links">
                <ul>
                    <NavLink to={"/men"}>
                        <li>Men</li>
                    </NavLink>
                    <NavLink to={"/women"}>
                        <li>Women</li>
                    </NavLink>
                    <NavLink to={"/kids"}>
                        <li>Kids</li>
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-cart">
                <NavLink to={"/signin"} className="sign">
                    <IoPersonOutline />
                </NavLink>
                <NavLink to={"/cart"} className="cart">
                    <IoBagHandleOutline />
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
