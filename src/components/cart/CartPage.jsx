import React from "react";

import "./../cart_css/CartPage.css";

import CartNavbar from "./CartNavbar";
import CartStore from "./CartStore";

const CartPage = function() {
    return (
        <div className="cartPage">
            <CartNavbar />
            <CartStore />
        </div>
    )
}

export default CartPage;