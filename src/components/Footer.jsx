import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className=" footer-section col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <p>Budhanilkantha-10, Jyotinagar, Kathmandu</p>
            <p>+977-9806422479</p>
            <p>chaudharibipin121@gmail.com</p>
          </div>

          <div className=" footer-section links col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#service">Services</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-section col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="newsletter">
              <h2>Newsletter</h2>
              <input type="text" className="form-control " />
              <button className="btn btn-primary btn-lg my-2">Subscribe</button>
            </div>

            <div className="social-media">
              <h4 className="my-2">Follow me</h4>
              <a href="https://www.facebook.com/bipin.chaudhary.165/"><FontAwesomeIcon icon={faFacebook} className="social-icon"/></a>
              <a href="https://github.com/Bipin-chy"><FontAwesomeIcon icon={faGithub} className="social-icon" /></a>
              <a href="https://www.instagram.com/bipin_here/?hl=en"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
              <a href="https://twitter.com/BipinCh30952485"> <FontAwesomeIcon icon={faTwitter} className="social-icon"/></a>
              <a href="https://www.linkedin.com/in/bipin-chaudhary-5b1193194/"> <FontAwesomeIcon icon={faLinkedin} className="social-icon"/></a>
              
            </div>
          </div>
        </div>
        <div className="row copyright">
                <p>© copyright 2021, all rights reserved.</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
