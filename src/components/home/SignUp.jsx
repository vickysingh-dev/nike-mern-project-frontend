import React from "react";
import '../home_css/SignUp.css';

function SignUp() {
    return (
        <div className="signUp">
            <div className="signUpHeading"><span className="heading1">Latest Arrivals</span><br></br> be the <span className="heading2">First One</span><br></br>to <span className="heading3">Grab the</span><br></br><span className="heading4">Deal!</span></div>
            <div className="signBox">
                <a href="/signup" className="signUpButton">Sign Up</a>
                <a href="/signin" className="signInButton">Sign In</a>
            </div>
        </div>
    )
}

export default SignUp;