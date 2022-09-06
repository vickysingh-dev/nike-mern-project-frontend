import React from "react";
import '../shop_css/Shop.css';

import ShopFilter from "./ShopFilter";
import ShopGallery from "./ShopGallery";

function Shop(props) {
    return (
        <div className="shop">
            <div className="shopParent">
                <ShopFilter />
                <ShopGallery props={props} />
            </div>
        </div>
    )
}

export default Shop;