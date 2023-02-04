import React from "react";

import "./../cart_css/CartStore.css";

import emptyCart from "./../../assets/emptyCart.webp";

import CartItems from "./CartItems";
import CartBilling from "./CartBilling";

const CartStore = ({ cartDetails, setCartDetails }) => {
    const updateItem = async (_id, quantity, size) => {
        const res = await fetch(
            "https://nike-sample.adaptable.app/updateItem",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    item_id: _id,
                    quantity: quantity,
                    size: size,
                }),
                credentials: "include",
            }
        );
        const data = await res.json();
        return data;
    };

    const handleQuantityChange = async (_id, quantity, size) => {
        setCartDetails((prevData) => ({
            ...prevData,
            items: prevData.items.map((item) => {
                if (item._id == _id && item.size == size) {
                    item.isLoading = true;
                }
                return item;
            }),
        }));
        const updatedItem = await updateItem(_id, quantity, size);
        setCartDetails((prevData) => ({
            ...prevData,
            items: prevData.items.map((item) => {
                if (item._id == _id && item.size == size) {
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
            {cartDetails?.items.length > 0 ? (
                <div className="cartStore">
                    <CartItems
                        handleQuantityChange={handleQuantityChange}
                        cartDetails={cartDetails}
                        setCartDetails={setCartDetails}
                    />
                    <CartBilling items={cartDetails} />
                </div>
            ) : (
                <div>
                    <div className="emptyCartPage">
                        <img src={emptyCart}></img>
                        <h1>Your Cart Is Empty!</h1>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartStore;
