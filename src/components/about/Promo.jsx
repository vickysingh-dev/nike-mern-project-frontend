import React from "react";
import "./../about_css/promo.css";

import promo from "./../../assets/promo.mp4";

function Promo() {
    return (
        <div className="promo">
            <div className="about-video">
                <video src={promo} autoPlay loop muted />
            </div>
        </div>
    )
}

export default Promo;