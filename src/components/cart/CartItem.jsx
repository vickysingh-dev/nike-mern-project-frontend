import React, { useState, useEffect } from "react";
import "./../cart_css/CartItem.css";

const CartItem = ({ item }) => {
    // console.log("inside the CartItem is ", item);

    const price = item.price.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR",
    });

    return (
        <div className="cartItem">
            <img src={item.image} alt={"Sorry"} />
            <div className="cartItemDetails">
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <h4>Selected Size : </h4>
                <h3>{price}</h3>
                <div className="cartItemCounter">
                    <p>Quantity</p>
                    <div>
                        <button>-</button>
                        <span>Quantity</span>
                        <button>+</button>
                    </div>
                </div>
                <h3>Order Total</h3>
            </div>
        </div>
    );
};

export default CartItem;
