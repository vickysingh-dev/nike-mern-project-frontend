import React from "react";

import samplePic from "./../../assets/sample-item.webp";
import "./../cart_css/CartItem.css";

const CartItem = () => {
    return (
        <div className="cartItem">
            <img src={samplePic} alt={"Sorry"} />
            <div className="cartItemDetails">
                <h2>Your  Title Here</h2>
                <p>category men</p>
                <h4>Selected Size : </h4>
                <h3>Price</h3>
                <div className="cartItemCounter">
                    <p>Quantity</p>
                    <div>
                        <button>-</button><span>Quantity</span><button>+</button>
                    </div>
                </div>
                <h3>Order Total</h3>
            </div>
        </div>
    )
}

export default CartItem;