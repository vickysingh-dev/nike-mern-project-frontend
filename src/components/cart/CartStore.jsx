import React from "react";

import "./../cart_css/CartStore.css";

import CartItems from "./CartItems";
import CartBilling from "./CartBilling";

const CartStore = () => {
    return (
        <div className="cartStore">
            <CartItems />
            <CartBilling />
        </div>
    )
}

export default CartStore;