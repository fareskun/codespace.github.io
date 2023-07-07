import React from "react";
import "./header.css";
import peaple from "../../assets/people.png";
import ai from "../../assets/ai.svg";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's designe your brand</h1>
        <p>i'm not a profitionam i'm just trying to buld somthing</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your Email Address" />
          <button type="button">jione us </button>
        </div>
        <div className="gpt3__header-content__peaple">
          <img src={peaple} alt="peale" />
          <p>a lot of peaple are workin with me man why don't you </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="man this is an image frfr" />
      </div>
    </div>
  );
};

export default Header;
