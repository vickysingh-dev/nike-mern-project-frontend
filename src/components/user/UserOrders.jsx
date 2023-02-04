import React from "react";

import "../user_css/UserOrders.css";
import OrderCard from "./OrderCard";

const UserOrders = () => {
    return (
        <div className="userOrders">
            <h1>Your Orders</h1>
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </div>
    );
};

export default UserOrders;
