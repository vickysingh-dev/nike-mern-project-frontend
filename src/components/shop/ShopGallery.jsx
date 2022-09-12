import React, { useState, useEffect } from "react";
import "../shop_css/ShopGallery.css";

// import Error from "../Error";

import Card from "./Card";
import Loader from "../Loader";

export default function ShopGallery({ category }) {
    console.log(category);
    const [items, setItems] = useState([]);
    // const [category, setCategory] = useState("");
    const [loader, setLoader] = useState(true);

    console.log("shop gallery rerendered");

    const fetchItems = async () => {
        // setLoader(true);

        // setCategory(category);

        try {
            const res = await fetch(`http://localhost:8000/${category}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    category: category,
                }),
            });

            const data = await res.json();

            if (data.status === 422 || !data) {
                console.log("Failed to load the resources!");
            } else {
                setItems(data);
                console.log("Item Changed", data);
            }

            setLoader(false);
        } catch (err) {
            console.log(err);
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [category]);

    return (
        <div className="shopGallery">
            {loader && <Loader />}

            {items.map(function (item, index) {
                return <Card key={index} item={item} />;
            })}
        </div>
    );
}
