import React from "react";
import { Navbar } from "../layoutcomponent/Navbar";
import { LandingPageImage } from "../layoutcomponent/LandingPageImage";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPageImage></LandingPageImage>
    </div>
  );
};

export { Home };
