import React, { useState, useEffect } from "react";

import "./../cart_css/CartStore.css";

import CartItems from "./CartItems";
import CartBilling from "./CartBilling";

const CartStore = ({ cartDetails, setCartDetails }) => {
    const updateItem = async (_id, quantity) => {
        const res = await fetch("http://localhost:8000/updateItem", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ item_id: _id, quantity: quantity }),
            credentials: "include",
        });
        const data = await res.json();
        return data;
    };

    const handleQuantityChange = async (_id, quantity) => {
        setCartDetails((prevData) => ({
            ...prevData,
            items: prevData.items.map((item) => {
                if (item._id == _id) {
                    item.isLoading = true;
                }
                return item;
            }),
        }));
        const updatedItem = await updateItem(_id, quantity);
        setCartDetails((prevData) => ({
            ...prevData,
            items: prevData.items.map((item) => {
                if (item._id == _id) {
                    item.quantity = quantity;
                    item.isLoading = false;
                }
                return item;
            }),
        }));
        if (quantity < 1) {
            setCartDetails((prevData) => {
                return {
                    ...prevData,
                    items: prevData.items.filter((value) => {
                        return !(value.quantity < 1);
                    }),
                };
            });
        }
    };

    return (
        <>
            {cartDetails ? (
                <div className="cartStore">
                    <CartItems
                        handleQuantityChange={handleQuantityChange}
                        items={
                            cartDetails.items && cartDetails.items.length > 0
                                ? cartDetails.items
                                : []
                        }
                    />
                    <CartBilling items={cartDetails} />
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default CartStore;
