import React from "react";

import '../sign_css/SignUpPage.css';

import SignUpPageInput from "./SignUpPageInput";
import SignUpPagePicture from "./SignUpPagePicture";

function SignUpPage() {
    return (
        <div className="signUpPage">
            <SignUpPagePicture />
            <SignUpPageInput />
        </div>
    );
}

export default SignUpPage;