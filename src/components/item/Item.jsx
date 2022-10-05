import React from "react";
import { useState, useEffect } from "react";
import "./../item_css/Item.css";

import { jsonRequest } from "../../utilities";

import Navbar from "../home/homePage/Navbar";
import ItemBar from "./ItemBar";

import Loader from "../Loader";

const Item = () => {
    const [loader, setLoader] = useState(false);

    const [items, setItems] = useState({
        name: "",
        category: "",
        price: "",
        size: [],
        image: "",
        _id: "",
    });

    const searchParam = new URLSearchParams(window.location.search);
    const _id = searchParam.get("_id");

    const fetchData = async () => {
        setLoader(true);
        try {
            const { data, res } = await jsonRequest({
                path: "/load",
                method: "POST",
                body: JSON.stringify({
                    _id,
                }),
                credentials: false,
            });

            if (res.status === 422 || !data) {
                console.log("Failed To fetch the data");
            } else {
                setItems(data);
            }
        } catch (err) {
            console.log(err);
        }
        setLoader(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="item">
            {loader && <Loader />}
            <Navbar />
            <ItemBar items={items} />
        </div>
    );
};

export default Item;
