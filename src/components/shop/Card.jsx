import React, { useState, useEffect } from "react";
import "../shop_css/Card.css";

import { useNavigate } from "react-router-dom";

export default function Card({ item: { title, price, address } }) {
    const navigate = useNavigate();

    var url = "/item";

    return (
        <div className="card" onClick={(e) => navigate(url)}>
            <div className="card-image">
                <img src={address} />
            </div>
            <div className="card-detail">
                <h4>{title}</h4>
                <p>{price}</p>
            </div>
        </div>
    );
}
