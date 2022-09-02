import React from "react";
import '../shop_css/ShopFilter.css';

export default function ShopFilter() {
    return (
        <div className="shopFilter">
            <h1 className="filterHeadingMain">Filter</h1>
            <div className="hr"></div>
            <h2>Size</h2>
            <div className="filterSize">
                <div className="sizeTokens" value="xs">XS</div>
                <div className="sizeTokens" value="s">S</div>
                <div className="sizeTokens" value="m">M</div>
                <div className="sizeTokens" value="l">L</div>
                <div className="sizeTokens" value="xl">XL</div>
                <div className="sizeTokens" value="xxl">XXL</div>
            </div>
            <div className="hr"></div>
            <h2>Color</h2>
            <div className="filterColor">
                <div className="colorToken" value="red" style={{'background-color':'red'}}></div>
                <div className="colorToken" value="green" style={{'background-color':'green'}}></div>
                <div className="colorToken" value="blue" style={{'background-color':'blue'}}></div>
                <div className="colorToken" value="white" style={{'background-color':'white'}}></div>
                <div className="colorToken" value="black" style={{'background-color':'black'}}></div>
                <div className="colorToken" value="grey" style={{'background-color':'grey'}}></div>
                <div className="colorToken" value="brown" style={{'background-color':'brown'}}></div>
                <div className="colorToken" value="pink" style={{'background-color':'pink'}}></div>
                <div className="colorToken" value="violet" style={{'background-color':'violet'}}></div>
            </div>
        </div>
    );
}