import React from "react";
import '../home_css/OutfitGallery.css';

function OutfitGallery(){
    return (
        <div className="OutfitGallery">
            <div className="men Outfit"><a href="/men" className="menLink">Men's</a></div>
            <div className="women Outfit"><a href="/women" className="womenLink">Women's</a></div>
            <div className="kids Outfit"><a href="/kids" className="kidLink">Kids'</a></div>
        </div>
    );
}

export default OutfitGallery;