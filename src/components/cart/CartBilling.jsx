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

    let orderTotalString = orderTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR",
    });

    let gst = 0.18 * orderTotal;
    gst = gst.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR",
    });

    let orderTotalGst = orderTotal + 0.18 * orderTotal;
    orderTotalGst = orderTotalGst.toLocaleString("en-IN", {
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
                                    {ele.name}
                                    <br></br> <span>(size {ele.size})</span> (
                                    {ele.quantity})
                                </h4>
                                <h4>{itemTotalPrice}</h4>
                            </div>
                        );
                    })}
                    <hr></hr>
                    <div className="cartBillingItemsTotal">
                        <h4>Items Total</h4>
                        <h4>{orderTotalString}</h4>
                    </div>
                    <div className="cartBillingGst">
                        <h5>18% GST applicable</h5>
                        <h5>{gst}</h5>
                    </div>
                    <hr></hr>
                    <div className="cartBillingTotal">
                        <h4>Order Total</h4>
                        <h3>{orderTotalGst}</h3>
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
