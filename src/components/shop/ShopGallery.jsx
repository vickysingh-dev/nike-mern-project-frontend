import React from "react";
import '../shop_css/ShopGallery.css';

import Card from "./Card";

export default function ShopGallery()  {
    return (
        <div className="shopGallery">
            <div className="cardParent">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}