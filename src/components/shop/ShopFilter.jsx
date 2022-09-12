import React from "react";
import "../shop_css/ShopFilter.css";

export default function ShopFilter() {
    return (
        <div className="shopFilter">
            <h1 className="filterHeadingMain">Filter</h1>
            <div className="hr"></div>
            <h2>Size</h2>
            <div className="filterSize">
                <div className="sizeTokens" value="xs">
                    XS
                </div>
                <div className="sizeTokens" value="s">
                    S
                </div>
                <div className="sizeTokens" value="m">
                    M
                </div>
                <div className="sizeTokens" value="l">
                    L
                </div>
                <div className="sizeTokens" value="xl">
                    XL
                </div>
                <div className="sizeTokens" value="xxl">
                    XXL
                </div>
            </div>
            <div className="hr"></div>
            <h2>Brand</h2>
            <div className="filterBrand">
                <div>
                    <input
                        type="checkbox"
                        id="nikeJordan"
                        className="brandInput"
                        value="Nike Jordan"
                    />
                    <label htmlFor="nikeJordan"> Nike Jordan</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="nikeAirMax"
                        className="brandInput"
                        value="Nike Air Maxx"
                    />
                    <label htmlFor="nikeAirMax"> Nike Air Maxx</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="nikeBlazers"
                        className="brandInput"
                        value="Nike Blazers"
                    />
                    <label htmlFor="nikeBlazers"> Nike Blazers</label>
                </div>
            </div>
        </div>
    );
}
