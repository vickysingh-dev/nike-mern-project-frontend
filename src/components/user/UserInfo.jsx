import React from "react";

import "../user_css/UserInfo.css";

import { IoPersonCircleSharp } from "react-icons/io5";
// react-icons/io5

const UserInfo = () => {
    return (
        <div className="userInfo">
            <h1>Profile</h1>
            <div className="userInfo-container">
                <div className="userInfo-image">
                    <IoPersonCircleSharp className="userInfoImage-icon" />
                </div>
                <div className="userInfo-details">
                    <h2>Name</h2>
                    <h3>Email</h3>
                    <h3>Shipping Address</h3>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
