import React from "react";
import '../sign_css/SignInPagePicture.css';

import signPic from "./../../assets/signin.webp";

export default function SignInPagePicture()  {
    return (
        <div className="signInPagePicture">
            <img src={signPic} alt="Image Not Available"></img>
        </div>
    );
}