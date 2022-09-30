import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./../cart_css/CartPage.css";

import CartNavbar from "./CartNavbar";
import CartStore from "./CartStore";

const CartPage = function () {
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        name: "",
        email: "",
        _id: "",
        cart: [],
    });

    const fetchData = async () => {
        const res = await fetch("http://localhost:8000/cart", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        if (res.status === 200) {
            console.log(data);
            setInfo((prev) => {
                return {
                    name: data.name,
                    email: data.email,
                    _id: data._id,
                    cart: data.cart,
                };
            });
        } else if (res.status === 400) {
            console.log(data);
            navigate("/", { replace: true });
        } else {
            console.log(data);
            navigate("/error", { replace: true });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {}, [info]);

    return (
        <>
            <div className="cartPage">
                <CartNavbar props={{ name: info.name, _id: info._id }} />
                <CartStore props={info} />
            </div>
        </>
    );
};

export default CartPage;
