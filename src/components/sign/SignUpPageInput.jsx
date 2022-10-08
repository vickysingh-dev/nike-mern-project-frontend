import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../sign_css/SignUpPageInput.css";

import logo from "./../../assets/nike-logo-comment.jpg";

import Loader from "../Loader";

import ModalAlert from "../modals/ModalAlert";

import { IoLogoGoogle } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";

export default function SignUpPageInput() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loader, setLoader] = useState(false); // Loader

    const [modalOpen, setModalOpen] = useState(false); // Modal opener
    const [modalProps, setModalProps] = useState({});

    let name, value;

    const handleInput = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, password } = user;

        if (!name || !email || !password) {
            setModalProps({
                modalTitle: "Incomplete Credentials",
                modalBody: `Your field is empty!`,
                modalFooter: "Jump Back",
            });
            setModalOpen(true);
        } else {
            setLoader(true);

            try {
                const res = await fetch("http://localhost:8000/signup", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                });

                const data = await res.json();
                console.log("response => ", res);
                console.log("data => ", data);

                if (res.status === 401) {
                    setModalProps({
                        modalTitle: "Invalid Credentials",
                        modalBody: "Your Credentials are Invalid or Incomplete",
                        modalFooter: "Try Again",
                    });
                    setModalOpen(true);
                } else if (res.status === 409) {
                    setModalProps({
                        navigateTo: "/signin",
                        modalTitle: "User Already Exists",
                        modalBody:
                            "You are already a registered User, Proceed To Sign In",
                        modalFooter: "Sign In",
                    });
                    setModalOpen(true);
                } else if (res.status === 404) {
                    setModalProps({
                        modalTitle: "Invalid Email Id",
                        modalBody: "You are sending an Invalid Email Id",
                        modalFooter: "Try Again",
                    });
                    setModalOpen(true);
                } else if (res.status === 200) {
                    setModalProps({
                        navigateTo: "/signin",
                        modalTitle: "Sign Up Successfull!",
                        modalBody: "Welcome to the Nike Family",
                        modalFooter: "Proceed",
                    });
                    setModalOpen(true);
                } else {
                    console.log(data);
                }
                setUser({
                    name: "",
                    email: "",
                    password: "",
                });
            } catch (err) {
                console.log(err);
                navigate("/error", { replace: true });
            }
            setLoader(false);
        }
    };

    return (
        <div className="signUpPageInput">
            {loader && <Loader />}

            <div className="signUpLogo">
                <img src={logo} alt="some text here" />
                <div className="signUpHeading">
                    Fill below details to Join Us
                </div>
            </div>
            <div className="signUpInputs">
                <div className="nameInput">
                    <span className="signUpIcons">
                        <IoPersonSharp />
                    </span>
                    <input
                        type="text"
                        className="b1"
                        name="name"
                        placeholder="Name"
                        value={user.name}
                        onChange={handleInput}
                    ></input>
                </div>
                <div className="emailInput">
                    <span className="signUpIcons">
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
                    <span className="signUpIcons">
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
                <div className="submitInput">
                    <input
                        type="button"
                        className="b4"
                        value="Create Account"
                        onClick={postData}
                    ></input>
                </div>
            </div>
            <div className="signUpDivider">
                <div className="hr"></div>
                <span className="signUpOr">OR</span>
                <div className="hr"></div>
            </div>
            <div className="signUpAlt">
                <div className="signUpGoogle">
                    <div className="googleBtn">
                        <span className="googleIcon">
                            <IoLogoGoogle />
                        </span>
                        Sign Up With Google
                    </div>
                </div>
                <div className="signInOption">
                    Already A Member,{" "}
                    <NavLink to="/signin">
                        <span>Log In</span>
                    </NavLink>
                </div>
            </div>

            {modalOpen && (
                <ModalAlert setOpenModal={setModalOpen} props={modalProps} />
            )}
        </div>
    );
}
