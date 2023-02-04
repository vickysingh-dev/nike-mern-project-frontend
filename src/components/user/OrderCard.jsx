import React from "react";

import {
    IoCheckmarkCircleSharp,
    IoGiftSharp,
    IoHomeSharp,
    IoAirplaneSharp,
    IoIdCardSharp,
} from "react-icons/io5";

import "../user_css/OrderCard.css";

const OrderCard = () => {
    return (
        <div className="orderCard">
            <div className="orderCardDetails">
                <div className="orderCardImage">
                    <img src="products/one.webp" />
                </div>
                <div className="orderCardInfo">
                    <h2>Order Name</h2>
                    <h4>Category</h4>
                    <h3>Selected Size</h3>
                    <h2>Price</h2>
                    <h3>Qunatity</h3>
                </div>
            </div>
            <div className="orderCardProgress">
                <ul>
                    <li>
                        <IoIdCardSharp className="order-icon" />
                    </li>
                    <li>
                        <IoGiftSharp className="order-icon" />
                    </li>
                    <li>
                        <IoAirplaneSharp className="order-icon" />
                    </li>
                    <li>
                        <IoHomeSharp className="order-icon" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OrderCard;
