import React from "react";

import '../sign_css/SignInPage.css';
import SignInPageInput from "./SignInPageInput";
import SignInPagePicture from "./SignInPagePicture";

function SignInPage() {
    return (
        <div className="signInPage">
            <SignInPageInput />
            <SignInPagePicture />
        </div>
    )
}

export default SignInPage;