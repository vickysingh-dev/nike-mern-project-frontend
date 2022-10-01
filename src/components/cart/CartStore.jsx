import React, { useState, useEffect } from "react";

import "./../cart_css/CartStore.css";

import CartItems from "./CartItems";
import CartBilling from "./CartBilling";

const CartStore = ({ props }) => {
    console.log("the props to cart store is ", props);

    const [items, setItems] = useState([]);

    const fetchData = async () => {
        const res = await fetch("http://localhost:8000/getItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props.cart),
            credentials: "include",
        });
        const data = await res.json();
        if (res.status === 200) {
            console.log(data);
            setItems(() => {
                return data;
            });
        } else if (res.status === 201) {
            console.log(data);
        } else {
            console.log(data);
        }
    };

    useEffect(() => {
        if (props.cart.length > 0) {
            fetchData();
        }
    }, [props]);

    // useEffect(() => {}, [items]);

    return (
        <>
            {items.length > 0 ? (
                <div className="cartStore">
                    <CartItems items={items} />
                    <CartBilling />
                </div>
            ) : (
                <div className="cartStore">
                    <CartItems items={[]} />
                    <CartBilling />
                </div>
            )}
        </>
    );
};

export default CartStore;
