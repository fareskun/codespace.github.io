import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Let us be the path towards your success</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Once again, we are bringing out all your imaginations, so let your
        imagination run wild and let the world see
      </p>
      <h4>Let us be the path towards your success</h4>
    </div>
  </div>
);

export default Possibility;
