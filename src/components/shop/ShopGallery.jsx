import React, { useState, useEffect } from "react";
import '../shop_css/ShopGallery.css';

import Error from "../Error";
import Card from "./Card";

export default function ShopGallery()  {

    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false);

    const fetchItems = async () => {

        const res = await fetch("http://localhost:8000/men", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                category : "men"
            })
        })

        const data = await res.json();

        if (data.status === 422 || !data){
            console.log("Failed to load the resources!");
        }
        else {
            setLoad(!load);
            setItems(data);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="shopGallery">
            {   
                load ? 
                items.map(function(item, index){
                    return <Card key={index} props={item}/>
                }) : 
                <Error />
            }
        </div>
    );
}