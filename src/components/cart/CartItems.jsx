import React, { useState } from "react";

import "./../cart_css/CartItems.css";

import { IoTrashSharp } from "react-icons/io5";

import CartItem from "./CartItem";

import Loader from "../Loader";

import ModalAlert from "../modals/ModalAlert";

const CartItems = ({ cartDetails, setCartDetails, handleQuantityChange }) => {
    const [loader, setLoader] = useState(false); // set Loader

    const [modalOpen, setModalOpen] = useState(false); // set state for Modal
    const [modalProps, setModalProps] = useState({});

    const clearCartItems = async () => {
        const res = await fetch("https://nike-sample.adaptable.app/clearCart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        if (res.status === 200) {
            setCartDetails((prev) => {
                return { ...prev, items: [] };
            });
        }
    };

    console.log(cartDetails);

    const clearItems = () => {
        setModalProps({
            modalTitle: "Clear All Cart",
            modalBody: "All items from your Cart will be Cleared!",
            modalFooter: "Clear Cart",
            action: clearCartItems,
            creds: {},
        });
        setModalOpen(true);
    };

    return (
        <>
            {modalOpen && (
                <ModalAlert setOpenModal={setModalOpen} props={modalProps} />
            )}
            {Object.keys(cartDetails).length > 0 ? (
                <div className="cartItems">
                    <div className="cartItemsHeading">
                        <h1>Items in Your Cart</h1>
                    </div>
                    <div className="cartClearButton">
                        <span>
                            Clear All Items
                            <button onClick={clearItems}>
                                <IoTrashSharp style={{ color: "white" }} />
                            </button>
                        </span>
                    </div>
                    <div className="cartItemsList">
                        {cartDetails.items.map((item, index) => {
                            return (
                                <CartItem
                                    key={index}
                                    handleQuantityChange={handleQuantityChange}
                                    item={item}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="emptyCartParent">
                    <h1 className="emptyCart">Sorry Your Cart Is Empty</h1>
                </div>
            )}
        </>
    );
};

export default CartItems;
