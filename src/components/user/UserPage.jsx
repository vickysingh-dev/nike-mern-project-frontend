import React from "react";

import CartNavbar from "../cart/CartNavbar";
import UserDetails from "./UserDetails";

const UserPage = () => {
    return (
        <div className="userPage">
            <CartNavbar props={"vicky"} />
            <UserDetails />
        </div>
    );
};

export default UserPage;
