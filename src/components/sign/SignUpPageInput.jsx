import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../sign_css/SignUpPageInput.css';

import { IoLogoGoogle } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";

export default function SignUpPageInput() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", password: ""
    });

    let name, value;

    const handleInput = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user , [name]: value});
    }

    const postData = async (e) => {
        e.preventDefault();

        const { name , email , password } = user;

            const res = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });
    
            const data = await res.json();
    
            if (data.status === 422 || !data) {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            }
            else {
                window.alert("User Registered Successfully");
                console.log("User Registered Successfully");
    
                navigate("/signin", {replace: "true"});
            }
    }

    return (
        <div className="signUpPageInput">
            <div className="div1">
                <h2 className="hello">Hello, </h2>
                <span className="doodleMumma">
                    <span className="inputDoodles">
                        <IoPersonSharp />
                    </span>
                    <input type="text" className="b1" name="name" placeholder="Name" value={user.name} onChange={handleInput}></input>
                </span>
                <span className="doodleMumma">
                    <span className="inputDoodles">
                        <IoMail />
                    </span>
                    <input type="text" className="b2" name="email" placeholder="E-mail" value={user.email} onChange={handleInput}></input>
                </span>
                <span className="doodleMumma">
                    <span className="inputDoodles">
                        <IoLockOpen />
                    </span>
                    <input type="password" className="b3" name="password" placeholder="Password" value={user.password} onChange={handleInput}></input>
                </span>
                <input type="button" className="b4" value="Create Account" onClick={postData}></input>
            </div>
            <div className="divDivider">
                <div className="hr"></div><span>OR</span><div className="hr"></div>
            </div>
            <div className="div2">
                <div className="GoogleSignIn"><IoLogoGoogle /> Sign Up With Google</div>
            </div>
            <div className="div3">
                <h5 className="createAccount">Already have an Account? <NavLink to={"/signin"}>Log In</NavLink></h5>
            </div>
        </div>
    );
}