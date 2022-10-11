import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./../cart_css/CartPage.css";

import CartNavbar from "./CartNavbar";
import CartStore from "./CartStore";

import Loader from "../Loader";
import Modal from "../modals/Modal";

const CartPage = function () {
    const navigate = useNavigate();

    const [loader, setLoader] = useState(false); // loader

    const [modalOpen, setModalOpen] = useState(false); // modal box
    const [modalProps, setModalProps] = useState({}); // set modal properties

    const [cartDetails, setCartDetails] = useState(null);

    const fetchData = async () => {
        setLoader(true);
        const res = await fetch("http://localhost:8000/cart", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        if (res.status === 200) {
            setCartDetails((prev) => ({
                items: data.items.map((item) => {
                    item.isLoading = false;
                    return item;
                }),
                userName: data.userName,
            }));
        } else if (res.status === 400) {
            setModalProps({
                navigateOnConfirm: "/signin",
                navigateOnCancel: "/",
                modalTitle: "You are not Signed In",
                modalBody: "Sign In to View Your Cart",
                cancelBtn: "Maybe Later",
                confirmBtn: "Sign In",
            });
            setModalOpen(true);
        } else {
            console.log(data);
            navigate("/error", { replace: true });
        }
        setLoader(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loader && <Loader />}

            {modalOpen && (
                <Modal setOpenModal={setModalOpen} props={modalProps} />
            )}

            <div className="cartPage">
                {cartDetails && (
                    <>
                        <CartNavbar
                            props={cartDetails ? cartDetails.userName : ""}
                        />
                        <CartStore
                            cartDetails={cartDetails ? cartDetails : {}}
                            setCartDetails={setCartDetails}
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default CartPage;
