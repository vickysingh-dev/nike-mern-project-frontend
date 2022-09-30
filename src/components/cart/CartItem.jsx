import React, { useState, useEffect } from "react";
import "./../cart_css/CartItem.css";

const CartItem = ({ item, handleQuantityChange }) => {
	// console.log("inside the CartItem is ", item);

	const price = item.price.toLocaleString("en-IN", {
		maximumFractionDigits: 0,
		style: "currency",
		currency: "INR",
	});

	return (
		<div className="cartItem">
			<img src={item.image} alt={"Sorry"} />
			<div className="cartItemDetails">
				<h2>{item.name}</h2>
				<p>{item.category}</p>
				<h4>Selected Size : </h4>
				<h3>{price}</h3>
				<div className="cartItemCounter">
					<p>Quantity</p>
					{!item.isLoading ? (
						<div>
							<button
								onClick={() => {
									handleQuantityChange(item._id, item.quantity - 1);
								}}>
								-
							</button>
							<span>{item.quantity}</span>
							<button
								onClick={() => {
									handleQuantityChange(item._id, item.quantity + 1);
								}}>
								+
							</button>
						</div>
					) : (
						<span>Loading...</span>
					)}
				</div>
				<h3>Order Total</h3>
			</div>
		</div>
	);
};

export default CartItem;
