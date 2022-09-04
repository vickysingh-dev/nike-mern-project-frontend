import React from "react";
import "./Error.css";

import error_pic from "./../assets/error.png";

export default () => {
    return (
        <div className="error">
            <img src={error_pic} alt="Image not Available"></img>
            <h1>Something Went Wrong :</h1>
            <h2>Internal Server Error 400</h2>
            <h3>Please try again Later.</h3>
        </div>
    )
}