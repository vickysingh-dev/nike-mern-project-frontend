import React from "react";
import "./../item_css/Item.css";

import Navbar from "../home/homePage/Navbar";
import ItemBar from "./ItemBar";

const Item = () => {
    return (
        <div className="item">
            <Navbar />
            <ItemBar />
        </div>
    )
}

export default Item;