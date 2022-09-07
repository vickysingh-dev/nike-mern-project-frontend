import React from "react";

import "./../cart_css/CartItems.css";

import CartItem from "./CartItem";

const  CartItems = () => {
    return (
        <div className="cartItems">
            <h1>Your Items</h1>
            <div className="cartItemsList">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    )
}

export default CartItems;