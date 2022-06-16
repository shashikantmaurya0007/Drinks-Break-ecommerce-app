import React, { useState, useEffect } from "react";
import { Filter, FilteredProducts } from "../component/index";
import { useProducts, useUser } from "../state";
import { Audio } from "react-loader-spinner";
import "../styles/Filter.css";

const ProductsListing = () => {
  const {
    productsState: { loading, error },
  } = useProducts();
  const [displayMobileFilter, setMobileFilter] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) {
        setMobileFilter(true);
      } else {
        setMobileFilter(false);
      }
    });
    if (window.innerWidth > 1000) {
      setMobileFilter(true);
    }
    return () => {
      window.removeEventListener("resize");
      
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loader_container">
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        </div>
      )}
      {!loading && (
        <main class="productlisting_main_container">
          {!displayMobileFilter && (
            <i
              className="bi bi-funnel-fill filter_mobile_button"
              onClick={() => setMobileFilter((prev) => !prev)}
            ></i>
          )}
          {displayMobileFilter && (
            <i
              onClick={() => setMobileFilter((prev) => !prev)}
              className="bi bi-eraser-fill filter_mobile_button"
            ></i>
          )}
          <Filter displayMobileFilter={displayMobileFilter} />
          <FilteredProducts />
        </main>
      )}
      {error && <h1>"sorry we are facing trouble right now"</h1>}
    </>
  );
};

export { ProductsListing };
