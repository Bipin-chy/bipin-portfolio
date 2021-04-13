import React from "react";
import Typed from "react-typed"


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Software Engineer</h1>
                <Typed
                    className="typed-text"
                    strings={['Web Deisgn', 'Web Development', 'MERN Developer', 'Tech Enthusiast']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a className="btn-main-offer" href="#">Contact me</a>
            </div>
        </div>
    )
}

export default Header;