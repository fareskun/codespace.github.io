import React from "react";
import Feature from "../../components/feature/Feature";
import "./whoisFares.css";

const WhoisFares = () => (
  <div className="gpt3__whoisfares section__margin" id="wfares">
    <div className="gpt3__whoisfares-feature">
      <Feature
        title="About us"
        text="Welcome to code space, a leading graphic design agency that delivers exceptional visual solutions. Our passionate team of talented designers creates captivating brand identities, print materials, web designs, UI/UX interfaces, social media graphics, illustrations, and infographics. With our customized approach, attention to detail, timely delivery, and focus on client satisfaction, we bring your ideas to life and help your business stand out. Contact us today to experience the power of exceptional design."
      />
    </div>
    <div className="gpt3__whoisfares-heading">
      <h1 className="gradient__text">Mack anything out of nothing</h1>
      <p>look at more</p>
    </div>
    <div className="gpt3__whoisfares-container">
      <Feature
        title="Logo Designe"
        text="A specialized logo design studio dedicated to creating impactful visual identities for businesses and individuals."
      />
      <Feature
        title="Brand Identity Designe"
        text="We believe that a strong brand identity is the foundation of any successful business."
      />
      <Feature
        title="Rebranding"
        text="
        As a rebranding designers, We specialize in helping businesses transform and revitalize their brand identities."
      />
    </div>
  </div>
);

export default WhoisFares;
