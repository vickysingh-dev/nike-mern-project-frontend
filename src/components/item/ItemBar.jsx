import React, { useState, useEffect } from "react";

import "./../item_css/ItemBar.css";

import { jsonRequest } from "../../utilities";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

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

    // const addToBag = () => {
    //     const { data, res } = jsonRequest({
    //         path: "/addToBag",
    //         method: "POST",
    //         body: JSON.stringify(product._id),
    //         credentials: true,
    //     })
    // };

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
                            return <div key={index}>{siz}</div>;
                        })}
                    </div>
                    <div className="itemBar-addCart" onClick={addToBag()}>
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
