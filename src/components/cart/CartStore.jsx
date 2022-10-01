import React, { useState, useEffect } from "react";

import "./../cart_css/CartStore.css";

import CartItems from "./CartItems";
import CartBilling from "./CartBilling";

const CartStore = ({ cartDetails, setCartDetails }) => {
    const handleQuantityChange = async (_id, quantity) => {
        setCartDetails((prevData) => ({
            items: prevData.items.map((item) => {
                if (item._id == _id) {
                    item.isLoading = true;
                }
                return item;
            }),
        }));
        // Do a Update Request Here - 2s
        setTimeout(() => {
            setCartDetails((prevData) => ({
                items: prevData.items.map((item) => {
                    if (item._id == _id) {
                        item.quantity = quantity;
                        item.isLoading = false;
                    }
                    return item;
                }),
            }));
        }, 5000);
    };

    return (
        <div className="cartStore">
            <CartItems
                handleQuantityChange={handleQuantityChange}
                items={
                    cartDetails.items && cartDetails.items.length > 0
                        ? cartDetails.items
                        : []
                }
            />
            <CartBilling />
        </div>
    );
};

export default CartStore;
