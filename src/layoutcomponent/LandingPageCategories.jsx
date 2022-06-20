import React from "react";
import styles from "../styles/LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import { useFilter, filterinitialstate, FILTER_ACTION } from "../state/index";
const LandingPageCategories = () => {
  const navigate = useNavigate();
  const { filterDispatch } = useFilter();

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
  const navigateToCategoryProduct = (categoryName) => {
    filterDispatch({
      type: FILTER_ACTION.RESET_FILTER,
      payload: { ...filterinitialstate },
    });

    filterDispatch({
      type: FILTER_ACTION.SORT_BY_CATEGORY,
      payload: {
        ...filterinitialstate,
        category: [categoryName.toLowerCase()],
      },
    });

    navigate("/products");
  };
  return (
    <div>
      <h1 className={styles.categories_title}>
        <span>C</span>ategories
      </h1>
      <div className={styles.categories_Container}>
        {categories.map(({ categoryName, image }) => (
          <div
            onClick={() => navigateToCategoryProduct(categoryName)}
            key={categoryName}
            className={styles.categories}
            defaultValue={"hello"}
          >
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
