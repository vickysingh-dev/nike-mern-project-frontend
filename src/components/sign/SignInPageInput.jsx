import React from "react";
import '../sign_css/SignInPageInput.css';

import { IoLogoGoogle } from "react-icons/io5";

export default function SignInPageInput() {
    return (
        <div className="signInPageInput">
            <div className="div1">
                <h2 className="welcome">Welcome Back,</h2>
                <input type="text" name="userId" className="t1" placeholder="Email Id"></input>
                <input type="password" name="password" className="t2" placeholder="Password"></input>
                <a href="#"  className="forgotPassword">Forgot Password</a>
                <input type="button" name="b1" value="Sign In" className="t3"></input>
            </div>
            <div className="divDivider">
                <div className="hr"></div><span>OR</span><div className="hr"></div>
            </div>
            <div className="div2">
                <div className="GoogleSignIn"><IoLogoGoogle /> Sign In With Google</div>
            </div>
            <div className="div3">
                <h5 className="createAccount">New to Nike? <a href={"/signUp"}>CREATE ACCOUNT</a></h5>
            </div>
        </div>
    );
}