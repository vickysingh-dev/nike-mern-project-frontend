import React, { useState } from "react";

import "./../cart_css/CartBilling.css";

import Modal from "../modals/Modal";

const CartBilling = ({ items }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProps, setModalProps] = useState({});

    let orderTotal = 0;

    items.items.forEach((ele) => {
        orderTotal += ele.price * ele.quantity;
    });
    orderTotal = orderTotal + 0.18 * orderTotal;
    orderTotal = orderTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR",
    });

    const userName =
        items.userName.charAt(0).toUpperCase() + items.userName.slice(1);

    const checkOut = () => {
        if (items.items.length < 1) {
            window.alert("Your Cart is Empty");
        } else {
            setModalProps({
                navigateOnConfirm: "/checkout",
                navigateOnCancel: "/cart",
                modalTitle: "Proceed To Shipping",
                modalBody:
                    "Items will be dispatched to your default Shipping Location.",
                cancelBtn: "Maybe Later",
                confirmBtn: "Proceed",
            });
            setModalOpen(true);
        }
    };

    return (
        <div className="cartBilling">
            <h1>Billing</h1>
            <div className="cartBillingContainer">
                <h3>Shipping to {userName}</h3>
                <h2>Order Summary</h2>
                <div className="cartBillingPriceCalc">
                    {items.items.map((ele, index) => {
                        let itemTotalPrice = ele.price * ele.quantity;
                        itemTotalPrice = itemTotalPrice.toLocaleString(
                            "en-IN",
                            {
                                maximumFractionDigits: 0,
                                style: "currency",
                                currency: "INR",
                            }
                        );
                        return (
                            <div className="cartBillingList" key={index}>
                                <h4>
                                    {ele.name} ({ele.quantity})
                                </h4>
                                <h4>{itemTotalPrice}</h4>
                            </div>
                        );
                    })}
                    <div className="cartBillingGst">
                        <h4>GST applicable</h4>
                        <h5>+18% of total</h5>
                    </div>
                    <hr></hr>
                    <div className="cartBillingTotal">
                        <h4>Order Total</h4>
                        <h3>{orderTotal}</h3>
                    </div>
                    <button className="checkOut" onClick={checkOut}>
                        Proceed To CheckOut
                    </button>
                </div>
            </div>

            {modalOpen && (
                <Modal setOpenModal={setModalOpen} props={modalProps} />
            )}
        </div>
    );
};

export default CartBilling;
