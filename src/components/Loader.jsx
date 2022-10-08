import React from "react";

import "./Loader.css";

import loading from "./../assets/loading.gif";

const Loader = () => {
    return (
        <div className="loader">
            <div className="loaderBlurBg"></div>
            <img src={loading} alt={"Can't fetch."} />
        </div>
    )
}

export default Loader;