import React, { useState, useEffect } from "react";

import "./../item_css/ItemBar.css";

import { jsonRequest } from "../../utilities";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useRef } from "react";

const ItemBar = ({ items }) => {
    console.log("The items from item page are : ", items);

    const [product, setProduct] = useState({
        name: "",
        price: "",
        size: [],
        image: "",
        category: "",
        _id: "",
    });

    const itemSize = useRef(null);

    const setSize = (e) => {
        itemSize.current = e.target.textContent;
        e.target.parentNode.childNodes.forEach((element) => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    };

    const getItems = () => {
        const price = items.price.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR",
        });
        const category = items.category.toUpperCase();

        setProduct((prevProduct) => {
            return { ...prevProduct, _id: items._id };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, price: price };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, category: category };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, name: items.name };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, size: items.size };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, image: items.image };
        });

        console.log("The product after fetching all is ", product);
    };

    const addToBag = async () => {
        if (itemSize.current == null) {
            window.alert("Select A size first");
            return;
        }
        const res = await fetch("http://localhost:8000/addItem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                item_id: product._id,
                size: itemSize.current,
            }),
            credentials: "include",
        });
        const data = await res.json();
        if (res.status === 201) {
            console.log("Item already there");
            console.log(data);
            window.alert("Item Already present in the cart");
        } else if (res.status === 200) {
            console.log("Item Added To cart Successfully");
            console.log(data);
            window.alert("Item added Successfully");
        } else {
            console.log(data);
            window.alert("Some error Occured while adding item to the cart");
        }
    };

    useEffect(() => {
        getItems();
    }, [items]);

    return (
        <div className="itemBar">
            <div className="itemBar-parent">
                <div className="itemBar-image">
                    <img src={product.image} />
                </div>
                <div className="itemBar-detail">
                    <h1>{product.name}</h1>
                    <h2>Category {product.category}</h2>
                    <h3>{product.price}</h3>
                    <h4>Select Size</h4>
                    <div className="itemBar-sizes">
                        {product.size.map(function (siz, index) {
                            return (
                                <div key={index} onClick={setSize}>
                                    {siz}
                                </div>
                            );
                        })}
                    </div>
                    <div className="itemBar-addCart" onClick={addToBag}>
                        Add to Bag
                    </div>
                    <div className="itemBar-favorite">
                        Favourite <IoHeartOutline />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemBar;
