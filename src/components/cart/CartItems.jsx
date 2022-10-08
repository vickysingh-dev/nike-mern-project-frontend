import React from "react";

import "./../cart_css/CartItems.css";

import CartItem from "./CartItem";

const CartItems = ({ items, handleQuantityChange }) => {
    return (
        <>
            {items.length > 0 ? (
                <div className="cartItems">
                    <h1>Items in Your Cart</h1>
                    <div className="cartItemsList">
                        {items.map((item, index) => {
                            return (
                                <CartItem
                                    key={index}
                                    handleQuantityChange={handleQuantityChange}
                                    item={item}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="emptyCartParent">
                    <h1 className="emptyCart">Sorry Your Cart Is Empty</h1>
                </div>
            )}
        </>
    );
};

export default CartItems;
