import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import video from "../production.mp4";

const string = ['Web Deisgn', 'Web Development', 'MERN Developer', 'Tech Enthusiast'];

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <video autoPlay loop  className="video" src={video}></video>
                <h1>Software Engineer</h1>
                <Typed
                    className="typed-text"
                    strings={string}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link className="btn-main-offer" href="#contact">Contact me</Link>
            </div>
        </div>
    )
}

export default Header;