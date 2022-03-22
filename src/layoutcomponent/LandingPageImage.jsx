import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
const LandingPageImage = () => {
  return (
    <div className={styles.banner_img_container}>
      <div className={styles.inside_banner}>
        <h1>Drinks-Break</h1>
        <h2>20% off</h2>
        <Link to={"/products"} className={styles.banner_btn}>
          Grab Your offer Now
        </Link>
      </div>
    </div>
  );
};

export { LandingPageImage };
