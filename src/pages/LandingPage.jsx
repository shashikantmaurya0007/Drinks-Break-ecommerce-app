import React from "react";
import { LandingPageImage } from "../layoutcomponent/LandingPageImage";
import { LandingPageCategories } from "../layoutcomponent/LandingPageCategories";
import { LandingPageTrendingItems } from "../layoutcomponent/LandingPageTrendingItems";

const LandingPage = () => {
  return (
    <div>
      <LandingPageImage />
      <LandingPageCategories />
      <LandingPageTrendingItems />
    </div>
  );
};

export { LandingPage };
