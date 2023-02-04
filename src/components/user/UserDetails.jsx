import React from "react";

import "../user_css/UserDetails.css";

import UserInfo from "./UserInfo";
import UserOrders from "./UserOrders";

const UserDetails = () => {
    return (
        <div className="userDetails">
            <UserOrders />
            <UserInfo />
        </div>
    );
};

export default UserDetails;
