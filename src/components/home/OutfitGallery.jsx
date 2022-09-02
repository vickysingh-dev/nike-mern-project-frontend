import React from "react";
import { NavLink } from "react-router-dom";
import '../home_css/OutfitGallery.css';

function OutfitGallery(){
    return (
        <div className="OutfitGallery">
            <div className="men Outfit"><NavLink to="/men" className="menLink">Men's</NavLink></div>
            <div className="women Outfit"><NavLink to="/women" className="womenLink">Women's</NavLink></div>
            <div className="kids Outfit"><NavLink to="/kids" className="kidLink">Kids'</NavLink></div>
        </div>
    );
}

export default OutfitGallery;