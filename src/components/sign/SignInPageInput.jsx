import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import '../sign_css/SignInPageInput.css';

import { IoLogoGoogle } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";

export default function SignInPageInput() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/signin", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                email, password
            })
        })

        const data = await res.json();

        if (data.status === 422 || !data){
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
        else {
            window.alert("Login Success!");
            console.log("Login Success");

            navigate("/", {replace: true});
        }
    }

    return (
        <div className="signInPageInput">
            <div className="div1">

                <h2 className="welcome">Welcome Back,</h2>
                <span className="doodleMumma">
                    <span className="inputDoodles">
                        <IoMail />
                    </span>
                    <input type="text" name="userId" className="t1" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </span>
                <span className="doodleMumma">
                    <span className="inputDoodles">
                        <IoLockOpen />
                    </span>
                    <input type="password" name="password" className="t2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </span>

                <NavLink to="#"  className="forgotPassword">Forgot Password</NavLink>

                <input type="button" name="b1" value="Sign In" className="t3" onClick={loginUser}></input>
            </div>
            <div className="divDivider">
                <div className="hr"></div><span>OR</span><div className="hr"></div>
            </div>
            <div className="div2">
                <div className="GoogleSignIn"><IoLogoGoogle /> Sign In With Google</div>
            </div>
            <div className="div3">
                <h5 className="createAccount">New to Nike? <NavLink to={"/signup"}>CREATE ACCOUNT</NavLink></h5>
            </div>
        </div>
    );
}