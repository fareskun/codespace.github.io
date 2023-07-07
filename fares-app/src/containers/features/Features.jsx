import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Develop your business",
    text: "A good brand identity means more sales if you develop your brand identity with us and take your business to another level",
  },
  {
    title: "logo",
    text: "It is not possible to start any trade or any business without a distinctive and unique logo. We provide that for you",
  },
  {
    title: "Rebranding",
    text: "And if you have a business and want to change how people see your brand, we offer a great rebranding servic",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize That We make a future
        looking Designs
      </h1>
      <p>Jupm into it right now</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
