import React from "react";

import "./../cart_css/CartNavbar.css";

import { IoLogOutOutline, IoPersonOutline } from "react-icons/io5";

const CartNavbar = () => {
    return (
        <div className="cartNavbar">
            <div className="brand-logo"></div>
            <div className="userGreet">
                Hello Vicky
            </div>
            <div className="userLogOut">
                <button>Log Out <IoLogOutOutline className="logOutBtn"/></button>
            </div>
        </div>
    )
}

export default CartNavbar;