import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../sign_css/SignInPageInput.css";

import Loader from "../Loader";

import ModalAlert from "../modals/ModalAlert";

import logo from "./../../assets/nike-logo-comment.jpg";

import { IoLogoGoogle } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";

export default function SignInPageInput() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [loader, setLoader] = useState(false); // set Loader

    const [modalOpen, setModalOpen] = useState(false); // set state for Modal

    const modalProps = {
        navigateTo: "/",
        modalTitle: "Sign In Successfull!",
        modalBody: "Welcome To the World of Nike",
        modalFooter: "Go Shopping",
    };

    let name, value;

    const handleInput = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        if (!email || !password) {
            window.alert("Incomplete Details Filled");
        } else {
            try {
                setLoader(true);

                const res = await fetch("http://localhost:8000/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });

                const data = await res.json();

                if (data.status === 422 || !data) {
                    setLoader(false);
                    window.alert("Invalid Credentials");
                    console.log("Invalid Credentials");
                } else {
                    setLoader(false);
                    window.alert("Login Success!");
                    console.log("Login Success");

                    // navigate("/", { replace: true });
                }
            } catch (err) {
                setModalOpen(true);
                console.log(err);
                setLoader(false);
            }
        }
    };

    return (
        <div className="signInPageInput">
            {loader && <Loader />}

            <div className="signInLogo">
                <img src={logo} alt="some text here" />
                <div className="signInHeading">Welcome</div>
            </div>

            <div className="signInInputs">
                <div className="emailInput">
                    <span className="signInIcons">
                        <IoMail />
                    </span>
                    <input
                        type="email"
                        className="b2"
                        name="email"
                        placeholder="E-mail"
                        value={user.email}
                        onChange={handleInput}
                    ></input>
                </div>
                <div className="passwordInput">
                    <span className="signInIcons">
                        <IoLockOpen />
                    </span>
                    <input
                        type="password"
                        className="b3"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleInput}
                    ></input>
                </div>
                <div className="forgotPassword">
                    <NavLink to="#" className="forgotPassword">
                        Forgot Password
                    </NavLink>
                </div>
                <div className="submitInput">
                    <input
                        type="button"
                        className="b4"
                        value="Log In"
                        onClick={loginUser}
                    ></input>
                </div>
            </div>

            <div className="signInDivider">
                <div className="hr"></div>
                <span className="signInOr">OR</span>
                <div className="hr"></div>
            </div>
            <div className="signInAlt">
                <div className="signInGoogle">
                    <div className="googleBtn">
                        <span className="googleIcon">
                            <IoLogoGoogle />
                        </span>
                        Sign In With Google
                    </div>
                </div>
                <div className="signUpOption">
                    New to Nike,{" "}
                    <NavLink to="/signup">
                        <span>Create Account</span>
                    </NavLink>
                </div>
            </div>

            {modalOpen && (
                <ModalAlert setOpenModal={setModalOpen} props={modalProps} />
            )}
        </div>
    );
}
