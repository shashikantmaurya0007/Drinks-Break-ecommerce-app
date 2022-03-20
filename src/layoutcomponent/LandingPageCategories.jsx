import React from "react";
import styles from "../styles/LandingPage.module.css";
const LandingPageCategories = () => {
  const categories = [
    {
      categoryName: "Beer",
      image: "https://drinks-break.netlify.app/IMAGES/categories_beer.jpg",
    },
    {
      categoryName: "Vodka",
      image: "	https://drinks-break.netlify.app/IMAGES/categories_vodka.jpg",
    },
    {
      categoryName: "Whisky",
      image: "https://drinks-break.netlify.app/IMAGES/categories_whisky.jpg",
    },
    {
      categoryName: "Wine",
      image: "https://drinks-break.netlify.app/IMAGES/categories_wine.jpg",
    },
  ];
  return (
    <div>
      <h1 className={styles.categories_title}>
        <span>C</span>ategories
      </h1>
      <div className={styles.categories_Container}>
        {categories.map(({ categoryName, image }) => (
          <div key={categoryName} className={styles.categories}>
            <img class="img-rounded" src={image} alt="categories" />
            <div className={styles.categories_overlay}>
              <h3>{categoryName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { LandingPageCategories };
