import React from "react";
import '../sign_css/SignUpPageInput.css';

import { IoLogoGoogle } from "react-icons/io5";

export default function SignUpPageInput() {
    return (
        <div className="signUpPageInput">
            <div className="div1">
                <h2 className="hello">Hello, </h2>
                <input type="text" className="b1" name="newUser" placeholder="Name"></input>
                <input type="text" className="b2" name="newUserId" placeholder="E-mail"></input>
                <input type="password" className="b3" name="newUserPassword" placeholder="Password"></input>
                <input type="button" className="b4" value="Create Account"></input>
            </div>
            <div className="divDivider">
                <div className="hr"></div><span>OR</span><div className="hr"></div>
            </div>
            <div className="div2">
                <div className="GoogleSignIn"><IoLogoGoogle /> Sign Up With Google</div>
            </div>
            <div className="div3">
                <h5 className="createAccount">Already have an Account? <a href={"/signin"}>Log In</a></h5>
            </div>
        </div>
    );
}