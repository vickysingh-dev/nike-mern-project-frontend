import React, { useState, useEffect } from "react";
import '../shop_css/Card.css';

import { useNavigate } from "react-router-dom";

// import sample from "./../../assets/sample-shoes.webp";

export default function Card(props) {

    const navigate = useNavigate();

    // const imgAddress = "sample-shoes.webp";

    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");

    // useEffect(() => {
    //     setTitle(props.title);
    //     setPrice(props.price);
    // }, []);

    const title = props.props.title;
    const price = props.props.price;

    const address = props.props.address;

    console.log(address);
    
    var url = "/item";

    url += "?";

    return (
        <div className="card" onClick={(e) => navigate(url, {replace: true})}>
            <div className="card-image">
                <img src={address} />
            </div>
            <div className="card-detail">
                <h4>{title}</h4>
                <p>{price}</p>
            </div>
        </div>
    );
}