import React from "react";

import "./../cart_css/CartBilling.css";

const CartBilling = () => {
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
                    <button className="checkOut">Proceed To CheckOut</button>
                </div>
            </div>
        </div>
    )
}

export default CartBilling;