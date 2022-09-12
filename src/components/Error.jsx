import React from "react";
import "./Error.css";

import error_pic from "./../assets/error.png";

import Loader from "./Loader";

export default () => {
    return (
        <div className="error">
            <div className="error-details">
                <h1>Something Went<br /> Wrong :</h1>
                <h2>Internal Server Error 400</h2>
                <h3>Please try again Later.</h3>
            </div>
            <img src={error_pic} alt="Image not Available"></img>
        </div>
    )
}