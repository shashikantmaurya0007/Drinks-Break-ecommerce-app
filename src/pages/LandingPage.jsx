import React from "react";
import { LandingPageImage } from "../layoutcomponent/LandingPageImage";
import { LandingPageCategories } from "../layoutcomponent/LandingPageCategories";

const LandingPage = () => {
  return (
    <div>
      <LandingPageImage />
      <LandingPageCategories />
    </div>
  );
};

export { LandingPage };
