import React from "react";
import '../shop_css/Shop.css';

import ShopFilter from "./ShopFilter";
import ShopGallery from "./ShopGallery";

function Shop() {
    return (
        <div className="shop">
            <div className="shopParent">
                <ShopFilter />
                <ShopGallery />
            </div>
        </div>
    )
}

export default Shop;