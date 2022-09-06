import React, { useState, useEffect } from "react";
import '../shop_css/Card.css';

import { useNavigate } from "react-router-dom";

export default function Card(props) {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        setTitle(props.props.title);
        setPrice(props.props.price);
        setAddress(props.props.address)
    }, []);

    // const title = props.props.title;
    // const price = props.props.price;

    // const address = props.props.address;
    
    var url = "/item";

    return (
        <div className="card" onClick={(e) => navigate(url)}>
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