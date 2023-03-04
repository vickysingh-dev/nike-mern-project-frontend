import React, { useState } from "react";

import "./../sign_css/updatePassword.css";

import { jsonRequest } from "../../utilities";

import logo from "./../../assets/nike-logo-comment.jpg";

import Loader from "../Loader";
import ModalAlert from "../modals/ModalAlert";

import { IoMail } from "react-icons/io5";
import { IoLockOpenSharp } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";

export default function UpdatePassword() {
    const [pageState, setPageState] = useState("getOTP"); // confirmOTP, setPass
    const [email, setEmail] = useState("");
    const [userOTP, setUserOTP] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loader, setLoader] = useState(false);

    const [modalOpen, setModalOpen] = useState(false); // set state for Modal
    const [modalProps, setModalProps] = useState({});

    const fetchData = async (url, bodyObj) => {
        setLoader(true);
        // const res = await fetch(`https://nike-sample.adaptable.app/${url}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(bodyObj),
        // });
        // const data = await res.json();
        const { data, res } = await jsonRequest({
            path: `/${url}`,
            method: "POST",
            body: JSON.stringify(bodyObj),
            credentials: "include",
        });
        setLoader(false);
        return { res, data };
    };

    const getOTP = async () => {
        if (!email) {
            setModalProps({
                modalTitle: "Incomplete Credentials",
                modalBody: "Email Must Be Provided",
                modalFooter: "Enter Email",
            });
            setModalOpen(true);
            return;
        }
        const result = await fetchData("getOtp", { email });
        if (result.res.status === 404) {
            setModalProps({
                modalTitle: "User Not Found!",
                modalBody: "You are not registered, Sign Up to Register",
                modalFooter: "Sign Up",
                navigateTo: "/signup",
            });
            setModalOpen(true);
        } else if (result.res.status === 200) {
            setModalProps({
                modalTitle: "OTP sent Successfully",
                modalBody: "Check your registered Email, for the OTP.",
                modalFooter: "Verify OTP",
            });
            setModalOpen(true);
            setPageState("confirmOTP");
        }
    };

    const confirmOTP = async () => {
        if (!userOTP) {
            setModalProps({
                modalTitle: "OTP Field can not be Empty",
                modalFooter: "Enter OTP",
            });
            setModalOpen(true);
            return;
        }
        const result = await fetchData("confirmOtp", {
            otp: userOTP,
            email: email,
        });
        if (result.res.status === 404) {
            setModalProps({
                modalTitle: "Credentials Mismatch",
                modalBody:
                    "The server found a mismatch, in your Credentials. Please start the process again.",
                modalFooter: "Go Back",
                navigateTo: "/forgotPassword",
            });
            setModalOpen(true);
        } else if (result.res.status === 200) {
            setModalProps({
                modalTitle: "OTP validated Successfully",
                modalFooter: "Okay",
            });
            setModalOpen(true);
            setPageState("setPass");
        } else if (result.res.status === 400) {
            setModalProps({
                modalTitle: "Invalid OTP Provided",
                modalBody:
                    "You have entered the Invalid OTP, check out your registered Email for the OTP",
                modalFooter: "Enter Again",
            });
            setModalOpen(true);
            setUserOTP("");
        }
    };

    const submitPass = async () => {
        if (!password || !confirmPassword) {
            setModalProps({
                modalTitle: "Password Field Cannot Be Empty",
                modalFooter: "Enter Again",
            });
            setModalOpen(true);
            return;
        } else if (password != confirmPassword) {
            setModalProps({
                modalTitle: "Passwords didn't Matched!",
                modalBody:
                    "Your Confirm Password should be same as the Password.",
                modalFooter: "Set Password",
            });
            setModalOpen(true);
            setPassword("");
            setConfirmPassword("");
            return;
        }
        const result = await fetchData("updatePass", {
            password: password,
            email: email,
            otp: userOTP,
        });
        if (result.res.status === 400) {
            setModalProps({
                modalTitle: `${result.data.msg}`,
                modalFooter: "Enter Again",
            });
            setModalOpen(true);
        } else if (result.res.status === 201) {
            setModalProps({
                modalTitle: "Password Not Updated!",
                modalBody:
                    "Your new Password cannot be same as the previous one.",
                modalFooter: "Set Password Again",
            });
            setModalOpen(true);
        } else if (result.res.status === 200) {
            setModalProps({
                modalTitle: "Password Updated Successfully",
                modalFooter: "Sign In",
                navigateTo: "/signin",
            });
            setModalOpen(true);
        } else {
            console.log("Internal Server Error!");
        }
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            {loader && <Loader />}

            {modalOpen && (
                <ModalAlert setOpenModal={setModalOpen} props={modalProps} />
            )}

            <div className="updatePassword">
                <div className="updatePassword-container">
                    <div className="signInLogo">
                        <img src={logo} alt="some text here" />
                        <div className="signInHeading">
                            {pageState == "getOTP" &&
                                "Enter Your Registered Email"}
                            {pageState == "confirmOTP" &&
                                "Confirm the OTP send"}
                            {pageState == "setPass" &&
                                "Enter Your New Password"}
                        </div>
                    </div>

                    {/* getting otp  */}

                    {pageState == "getOTP" && (
                        <div className="updatePassword-box">
                            <div>
                                <span className="signInIcons">
                                    <IoMail />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>
                            <button className="sendOTPbutton" onClick={getOTP}>
                                Send OTP
                            </button>
                        </div>
                    )}

                    {/* confirming otp  */}

                    {pageState == "confirmOTP" && (
                        <div className="updatePassword-box">
                            <div>
                                <span className="signInIcons">
                                    <IoLockOpenSharp />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    onChange={(e) => setUserOTP(e.target.value)}
                                ></input>
                            </div>
                            <button
                                className="sendOTPbutton"
                                onClick={confirmOTP}
                            >
                                Confirm OTP
                            </button>
                        </div>
                    )}

                    {/* setting password field */}

                    {pageState == "setPass" && (
                        <div className="updatePassword-box">
                            <div>
                                <span className="signInIcons">
                                    <IoKeySharp />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Enter New Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                ></input>
                            </div>
                            <div>
                                <span className="signInIcons">
                                    <IoKeyOutline />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                ></input>
                            </div>
                            <button
                                className="sendOTPbutton"
                                onClick={submitPass}
                            >
                                Save Password
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
