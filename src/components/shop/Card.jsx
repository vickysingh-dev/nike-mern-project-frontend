import React, { useState, useEffect } from "react";
import "../shop_css/Card.css";

import { useNavigate } from "react-router-dom";

export default function Card({ item: { name, price, image, _id } }) {
    const navigate = useNavigate();

    price = price.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR",
    });

    const url = `/item?_id=${_id}`;

    return (
        <div className="card" onClick={(e) => navigate(url)}>
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="card-detail">
                <h4>{name}</h4>
                <p>{price}</p>
            </div>
        </div>
    );
}
