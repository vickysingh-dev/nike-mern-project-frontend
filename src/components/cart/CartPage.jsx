import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./../cart_css/CartPage.css";

import CartNavbar from "./CartNavbar";
import CartStore from "./CartStore";

const CartPage = function () {
	const navigate = useNavigate();
	const [cartDetails, setCartDetails] = useState({});

	const fetchData = async () => {
		const res = await fetch("http://localhost:8000/cart", {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
			credentials: "include",
		});
		const data = await res.json();
		if (res.status === 200) {
			setCartDetails((prev) => ({
				items: data.items.map((item) => {
					item.isLoading = false;
					return item;
				}),
			}));
		} else if (res.status === 400) {
			console.log(data);
			navigate("/", { replace: true });
		} else {
			console.log(data);
			navigate("/error", { replace: true });
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="cartPage">
				<CartNavbar props={{ name: "", _id: "" }} />
				<CartStore cartDetails={cartDetails} setCartDetails={setCartDetails} />
			</div>
		</>
	);
};

export default CartPage;
