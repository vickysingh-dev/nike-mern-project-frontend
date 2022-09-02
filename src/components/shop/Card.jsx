import React from "react";
import '../shop_css/Card.css';

import sample from "./../../assets/sample-shoes.webp";

export default function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img src={sample} />
            </div>
            <div className="card-detail">
                <h4>Air Jordan 6 Retro</h4>
                <p>₹6,795</p>
            </div>
        </div>
    );
}