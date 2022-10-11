import React, { useState } from "react";
import "./../cart_css/CartItem.css";

import ModalAlert from "../modals/ModalAlert";

import { Navigate, useNavigate } from "react-router-dom";

const CartItem = ({ item, handleQuantityChange }) => {
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false); // set state for Modal
    const [modalProps, setModalProps] = useState({});

    const price = item.price.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR",
    });

    const priceTotal = item.price * item.quantity;

    const itemTotal = priceTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR",
    });

    const changeQuantity = (_id, quantity, size) => {
        if (quantity > 5) {
            setModalProps({
                modalTitle: "Cannot Add more than 5 Items.",
                modalFooter: "Okay",
            });
            setModalOpen(true);
            return null;
        } else if (quantity < 1) {
            setModalProps({
                modalTitle: "Item will be removed from the Cart",
                modalFooter: "Remove Item",
                action: handleQuantityChange,
                creds: { _id, quantity, size },
            });
            setModalOpen(true);
        } else {
            handleQuantityChange(_id, quantity, size);
        }
    };

    const url = `/item?_id=${item._id}`;

    return (
        <>
            <div className="cartItem">
                <div
                    className="wrongButton"
                    onClick={(e) => changeQuantity(item._id, 0, item.size)}
                >
                    X
                </div>
                <img
                    src={item.image}
                    alt={"Sorry"}
                    onClick={(e) => navigate(url)}
                />
                <div className="cartItemDetails">
                    <h2>{item.name}</h2>
                    <p>{item.category}</p>
                    <h4>
                        Selected Size :{" "}
                        <span className="itemSizeValue">{item.size}</span>
                    </h4>
                    <h3 style={{ textAlign: "right" }}>
                        <span style={{ float: "left", fontSize: ".8em" }}>
                            Item Price
                        </span>
                        {price}
                    </h3>
                    <div className="cartItemCounter">
                        <p>Quantity</p>
                        {!item.isLoading ? (
                            <div>
                                <button
                                    onClick={() => {
                                        changeQuantity(
                                            item._id,
                                            item.quantity - 1,
                                            item.size
                                        );
                                    }}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => {
                                        changeQuantity(
                                            item._id,
                                            item.quantity + 1,
                                            item.size
                                        );
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <span>Loading...</span>
                        )}
                    </div>
                    <hr style={{ margin: "5px" }}></hr>
                    <h3>
                        Item Total
                        <span style={{ float: "right" }}>{itemTotal}</span>
                    </h3>
                </div>
                {modalOpen && (
                    <ModalAlert
                        setOpenModal={setModalOpen}
                        props={modalProps}
                    />
                )}
            </div>
        </>
    );
};

export default CartItem;
