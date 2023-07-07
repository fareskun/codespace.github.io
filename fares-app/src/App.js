import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhoisFares,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <div>
          <Brand />
          <WhoisFares />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
