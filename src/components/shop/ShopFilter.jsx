import React, { useEffect, useState } from "react";
import "../shop_css/ShopFilter.css";

import Loader from "./../Loader";

export default function ShopFilter({ items }) {
    const [loader, setLoader] = useState(false);

    const filterList = items;
    console.log(filterList);
    const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
    let sizeList = [];
    if (filterList.length > 0) {
        sizeList = filterList[0].size;
        console.log(sizeList);
    }

    const delay = function (ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const setSize = async () => {
        setLoader(true);
        await delay(2000);
        setLoader(false);
    };

    useEffect(() => {}, [items]);

    return (
        <>
            {loader && <Loader />}
            <div className="shopFilter">
                <h1 className="filterHeadingMain">Filter</h1>
                <div className="hr"></div>
                <h2>Size</h2>
                <div className="filterSize">
                    {allSizes.map((ele, index) => {
                        if (sizeList.includes(ele)) {
                            return (
                                <div
                                    className="sizeTokens-active"
                                    key={index}
                                    value={ele}
                                    onClick={setSize}
                                >
                                    {ele}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className="sizeTokensInactive"
                                    key={index}
                                    value={ele}
                                >
                                    {ele}
                                </div>
                            );
                        }
                    })}
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
        </>
    );
}
