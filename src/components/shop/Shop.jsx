import React, { useState, useEffect } from "react";
import "../shop_css/Shop.css";

import ShopFilter from "./ShopFilter";
import ShopGallery from "./ShopGallery";

function Shop({ category }) {
    const [items, setItems] = useState([]);

    useEffect(() => {}, [items]);

    return (
        <div className="shop">
            <div className="shopParent">
                <ShopFilter items={items} />
                <ShopGallery
                    category={category}
                    items={items}
                    setItems={setItems}
                />
            </div>
        </div>
    );
}

export default Shop;
