import React from "react";
import '../sign_css/SignUpPagePicture.css';

import signPic from "./../../assets/signup.webp";

export default function SignUpPagePicture() {
    return (
        <div className="signUpPagePicture">
            <img src={signPic}></img>
        </div>
    );
}