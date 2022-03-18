import React from "react";
import styles from "../styles/LandingPageImage.module.css";
const LandingPageImage = () => {
  return (
    <main className={styles.drinksbreak_main_container}>
      <div className={styles.banner_img_container}>
        <div className={styles.inside_banner}>
          <h1>Drinks-Break</h1>
          <h2>20% off</h2>
          <a className={styles.banner_btn}>Grab Your offer Now</a>
        </div>
      </div>
    </main>
  );
};

export { LandingPageImage };
