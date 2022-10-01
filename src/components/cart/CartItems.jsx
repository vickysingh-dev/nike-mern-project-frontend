import React, { useState } from "react";
import { useEffect } from "react";

import "./../cart_css/CartItems.css";

import CartItem from "./CartItem";

const CartItems = ({ items, handleQuantityChange }) => {
	console.log("The cart items are ", items);

	return (
		<>
			{items.length > 0 ? (
				<div className="cartItems">
					<h1>Your Items</h1>
					<div className="cartItemsList">
						{items.map((item, index) => {
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
