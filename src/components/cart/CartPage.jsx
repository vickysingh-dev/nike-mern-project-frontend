import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./../cart_css/CartPage.css";

import CartNavbar from "./CartNavbar";
import CartStore from "./CartStore";

import { isAuthenticated } from "../../utilities";

const CartPage = function () {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = isAuthenticated();
    }, []);

    return (
        <div className="cartPage">
            {console.log("CArt page loaded")}
            <CartNavbar />
            <CartStore />
        </div>
    );
};

export default CartPage;
