import React from "react";
import { Navbar } from "../layoutcomponent/Navbar";
import { LandingPageImage } from "../layoutcomponent/LandingPageImage";
import { LandingPageCategories } from "../layoutcomponent/LandingPageCategories";
import { Footer } from "../layoutcomponent/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPageImage />
      <LandingPageCategories />
      <Footer />
    </div>
  );
};

export { Home };
