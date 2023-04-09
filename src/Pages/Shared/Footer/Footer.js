import React from "react";
import "./Footer.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-child-one">
        <img src={logo} alt="Site-logo" />
        <p>
          Thank you for choosing Car Doctor for
          <br />
          your car maintenance and repair needs.
          <br />
          we offer a wide range of services to meet your needs.
        </p>
        <div className="footer-child-one-icons">
          <span>
            <FaGoogle />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            {" "}
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
      <div className="footer-child-two">
        <h2>About</h2>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="footer-child-three">
        <h2>Company</h2>
        <div className="footer-links">
          <Link to="/">Why Car Doctor</Link>
          <Link to="/">About</Link>
        </div>
      </div>
      <div className="footer-child-four">
        <h2>Support</h2>
        <div className="footer-links">
          <Link to="/">Support Center</Link>
          <Link to="/">Feedback</Link>
          <Link to="/">Accesbility</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
