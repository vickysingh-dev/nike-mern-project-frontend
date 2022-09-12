import React from "react";
import './ShopPage.css';

import Navbar from "./home/homePage/Navbar";
import Footer from "./home/Footer";
import Shop from "./shop/Shop";

function ShopPage({ category }) {
    
    return (
        <div className="shopPage">
            <Navbar />
            <Shop category={category}/>
            <Footer />
        </div>
    )
}

export default ShopPage;