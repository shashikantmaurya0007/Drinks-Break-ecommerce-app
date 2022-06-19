import React from "react";
import { ProductCard } from "../component";
import { useProducts } from "../state";

import styles from "../styles/LandingPage.module.css";
const LandingPageTrendingItems = () => {
  const {
    productsState: { products },
  } = useProducts();

  const trendingProducts = products?.filter(
    (prod) => prod.offer === "Trending"
  );
  return (
    <div>
      <h1 className={styles.categories_title}>
        <span>T</span>rending<span>I</span>tems
      </h1>

      <div className={styles.landingPaage_trendingitems_con}>
        {trendingProducts?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export { LandingPageTrendingItems };
