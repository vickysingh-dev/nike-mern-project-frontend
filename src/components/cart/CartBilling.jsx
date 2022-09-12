import React, { useState } from "react";

import "./../cart_css/CartBilling.css";

import Modal from "../modals/Modal";

const CartBilling = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const modalProps = {
        navigateTo : "/",
        modalTitle : "Proceed To Shipping",
        modalBody : "Items will be dispatched to your default Shipping Location.",
        cancelBtn : "Maybe Later",
        confirmBtn : "Proceed"
    }

    return (
        <div className="cartBilling">
            <h1>Billing</h1>
            <div className="cartBillingContainer">
                <h3>Shipping to Vicky</h3>
                <h2>Order Summary</h2>
                <div className="cartBillingPriceCalc">
                    <div className="cartBillingList">
                        <h4>Item Title</h4>
                        <h5>Price</h5>
                    </div>
                    <div className="cartBillingGst">
                        <h4>GST applicable</h4>
                        <h5>+18% of total</h5>
                    </div>
                    <div className="cartBillingTotal">
                        <h4>Order Total</h4>
                        <h3>Price</h3>
                    </div>
                    <button className="checkOut" onClick={ () => {
                        setModalOpen(true);
                    }}>Proceed To CheckOut</button>
                </div>
            </div>

            { modalOpen && <Modal setOpenModal={setModalOpen} props={ modalProps }/>}

        </div>
    )
}

export default CartBilling;