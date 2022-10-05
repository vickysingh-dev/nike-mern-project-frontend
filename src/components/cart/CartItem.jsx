import React, { useState } from "react";
import "./../cart_css/CartItem.css";

import ModalAlert from "../modals/ModalAlert";

const CartItem = ({ item, handleQuantityChange }) => {
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

    const changeQuantity = (_id, quantity) => {
        if (quantity > 5) {
            setModalProps({
                modalTitle: "Cannot Add more than 5 Items.",
                modalFooter: "Okay",
            });
            setModalOpen(true);
            return null;
        } else {
            handleQuantityChange(_id, quantity);
        }
    };

    return (
        <div className="cartItem">
            <img src={item.image} alt={"Sorry"} />
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
                                    changeQuantity(item._id, item.quantity - 1);
                                }}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => {
                                    changeQuantity(item._id, item.quantity + 1);
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
                <ModalAlert setOpenModal={setModalOpen} props={modalProps} />
            )}
        </div>
    );
};

export default CartItem;
