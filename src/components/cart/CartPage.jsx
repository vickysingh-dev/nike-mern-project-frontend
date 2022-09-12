import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./../cart_css/CartPage.css";

import CartNavbar from "./CartNavbar";
import CartStore from "./CartStore";

const CartPage = function () {
    const navigate = useNavigate();

    const fetchCartPage = async () => {
        try {
            const res = await fetch("http://localhost:8000/cart", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                // credentials: "include",
            });

            const data = await res.json();

            console.log(data);

            if (!res.status == 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate("/signin", { replace: true });
        }
    };

    useEffect(() => {
        fetchCartPage();
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
