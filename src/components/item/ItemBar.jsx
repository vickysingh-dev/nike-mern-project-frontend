import React from "react";

import "./../item_css/ItemBar.css";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

import sampleItem from "./../../assets/sample-shoes.webp";

const ItemBar = () => {
    return (
        <div className="itemBar">
            <div className="itemBar-parent">
                <div className="itemBar-image">
                    <img src={sampleItem} />
                </div>
                <div className="itemBar-detail">
                    <h1>Nike Hyperdunk X EP</h1>
                    <h2>Category Men</h2>
                    <h3>₹11,895</h3>
                    <h4>Select Size</h4>
                    <div className="itemBar-sizes">
                        {/* <div>6</div> */}
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                    </div>
                    <div className="itemBar-addCart">Add to Bag</div>
                    <div className="itemBar-favorite">Favourite <IoHeartOutline /></div>
                </div>
            </div>
        </div>
    )
}

export default ItemBar;