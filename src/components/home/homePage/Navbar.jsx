import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    IoBagHandleOutline,
    IoPersonOutline,
    IoBagHandle,
    IoPerson,
} from "react-icons/io5";
import "../../home_css/homepage/Navbar.css";

import Modal from "../../modals/Modal";

// import { isAuthenticated } from "./../../../utilities";

function Navbar() {
    const [modalOpen, setModalOpen] = useState(false);

    const modalProps = {
        navigateTo: "/signin",
        modalTitle: "You are not Signed In",
        modalBody: "Sign In to View Your Cart",
        cancelBtn: "Maybe Later",
        confirmBtn: "Sign In",
    };

    // const cartBtnAction = () => {
    //     isAuthenticated()
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         return await isAuthenticated();
    //     };
    //     console.log(fetchData());
    // }, []);

    return (
        <div className="Navbar-display">
            <div className="brand-logo"></div>
            <div className="navbar-links">
                <ul>
                    <NavLink to={"/men"}>
                        <li>Men</li>
                    </NavLink>
                    <NavLink to={"/women"}>
                        <li>Women</li>
                    </NavLink>
                    <NavLink to={"/kids"}>
                        <li>Kids</li>
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-cart">
                <NavLink to={"/signin"} className="sign">
                    <IoPersonOutline />
                </NavLink>
                <NavLink to={"/cart"} className="cart">
                    <IoBagHandleOutline />
                </NavLink>
            </div>

            {/* {modalOpen && (
                <Modal setOpenModal={setModalOpen} props={modalProps} />
            )} */}
        </div>
    );
}

export default Navbar;
