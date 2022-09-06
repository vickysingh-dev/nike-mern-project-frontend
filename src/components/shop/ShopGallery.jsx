import React, { useState, useEffect } from "react";
import '../shop_css/ShopGallery.css';

// import Error from "../Error";

import Card from "./Card";

export default function ShopGallery(props)  {

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("");

    console.log(category);
    
    const fetchItems = async () => {

        setCategory(props.props.props.props.category);

        const res = await fetch(`http://localhost:8000/${category}`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                category : category
            })
        })

        const data = await res.json();

        if (data.status === 422 || !data){
            console.log("Failed to load the resources!");
        }
        else {
            setItems(data);
            console.log("Item Changed");
        }
    }

    useEffect(() => {
        fetchItems();
    }, [category]);

    return (
        <div className="shopGallery">
            {   
                items.map(function(item, index){
                    return <Card key={index} props={item}/>
                })
            }
        </div>
    );
}