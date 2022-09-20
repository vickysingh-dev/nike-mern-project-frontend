import React, { useState, useEffect } from "react";
import "../shop_css/ShopGallery.css";

import Card from "./Card";
import Loader from "../Loader";

import { jsonRequest } from "../../utilities";

export default function ShopGallery({ category }) {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    const fetchItems = async () => {
        setLoader(true);

        try {
            const { data, res } = await jsonRequest({
                path: "/load",
                method: "POST",
                body: JSON.stringify({
                    category,
                }),
                credentials: false,
            });

            if (res.status === 422 || !data) {
                console.log("Failed to load the resources!");
            } else {
                setItems(data);
            }
        } catch (err) {
            console.log(err);
        }

        setLoader(false);
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
