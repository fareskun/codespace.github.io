import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>._.</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>
          Fares Bouzza <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>fareskun884@gmail.com</p>
        <p>0775-85-31-54</p>
        <p>fares kun/consol.log_fares_</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 code space. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
