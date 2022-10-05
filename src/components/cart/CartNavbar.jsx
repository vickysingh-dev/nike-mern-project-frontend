import React, { useState } from "react";

import "./../cart_css/CartNavbar.css";
import { useNavigate } from "react-router-dom";

import { IoLogOutOutline } from "react-icons/io5";

import Modal from "../modals/Modal";

const CartNavbar = ({ props }) => {
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalProps, setModalProps] = useState({});

    const logOutAlert = () => {
        setModalProps({
            navigateOnConfirm: "/",
            navigateOnCancel: "/",
            modalTitle: "Sure, You want to Log Out?",
            modalBody:
                "Your Items are saved, and You will be redirected to Home Page!",
            cancelBtn: "Log Out",
            confirmBtn: "Not Now",
        });
        setModalOpen(true);
    };

    const logOut = async () => {
        const res = await fetch("http://localhost:8000/signout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        if (data.cookieCleared) {
            navigate("/", { replace: true });
        }
    };

    const name = props[0].toUpperCase() + props.slice(1);

    return (
        <div className="cartNavbar">
            <div className="brand-logo"></div>
            <div className="userGreet">Hello {name}</div>
            <div className="userLogOut">
                <button onClick={logOutAlert}>
                    Log Out <IoLogOutOutline className="logOutBtn" />
                </button>
            </div>
            {modalOpen && (
                <Modal
                    setOpenModal={setModalOpen}
                    props={modalProps}
                    extraFunction={logOut}
                />
            )}
        </div>
    );
};

export default CartNavbar;
