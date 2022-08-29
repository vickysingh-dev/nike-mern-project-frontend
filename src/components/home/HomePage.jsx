import React from "react";
import '../home_css/HomePage.css';
import Navbar from "./homePage/Navbar";
import HomeBody from "./homePage/HomeBody";

function HomePage() {
    return (
        <div className="HomePage">
            <Navbar />
            <HomeBody />
        </div>
    )
}

export default HomePage;