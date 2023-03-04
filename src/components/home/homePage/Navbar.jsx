import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    IoBagHandleOutline,
    IoPersonOutline,
    IoMenu,
    IoCloseSharp,
} from "react-icons/io5";
import "../../home_css/homepage/Navbar.css";

function Navbar() {
    function menuActivate() {
        console.log("menu activate running");
        document.querySelector(".navbar-links").style.display = "block";
        document.querySelector(".menu-close").style.display = "block";
        document.querySelector(".menu-open").style.display = "none";
    }

    function menuDeactivate() {
        document.querySelector(".navbar-links").style.display = "none";
        document.querySelector(".menu-open").style.display = "block";
        document.querySelector(".menu-close").style.display = "none";
    }
    function resizeFunction() {
        if (window.innerWidth > 550) {
            document.querySelector(".navbar-links").style.display = "block";
        } else if (window.innerWidth < 550) {
            document.querySelector(".navbar-links").style.display = "none";
        }
    }

    useEffect(() => {
        window.addEventListener("resize", resizeFunction);
        // return window.removeEventListener("resize", resizeFunction);
    }, []);

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
            <div className="navbar-menu">
                <div className="menu-close" onClick={() => menuDeactivate()}>
                    <IoCloseSharp />
                </div>
                <div className="menu-open" onClick={() => menuActivate()}>
                    <IoMenu />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
