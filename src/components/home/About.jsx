import React from "react";
import '../home_css/About.css';

import Promo from "../about/Promo";
import Mission from "../about/Mission";
import Comment from "../about/Comment";

function About() {
    return (
        <div className="about">
            <div className="about-parent">
                <Mission />
                <Promo />
                <Comment />
            </div>
        </div>
    )
}

export default About;