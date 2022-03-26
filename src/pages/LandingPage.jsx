import React, { useEffect } from "react";
import { LandingPageImage } from "../layoutcomponent/LandingPageImage";
import { LandingPageCategories } from "../layoutcomponent/LandingPageCategories";
import axios from "axios";

const LandingPage = () => {
  console.log("laoding");
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products");
      console.log(data.products);
      console.log("not loading");
    })();
  }, []);
  return (
    <div>
      <LandingPageImage />
      <LandingPageCategories />
    </div>
  );
};

export { LandingPage };
