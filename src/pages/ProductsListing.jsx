import React from "react";
import { Filter, ProductCard, FilteredProducts } from "../component/index";
import { useProducts, useFilter } from "../state";
import { Audio } from "react-loader-spinner";
import "../styles/Filter.css";
const ProductsListing = () => {
  const {
    productsState: { products, loading, error },
  } = useProducts();
  const { filterstate } = useFilter();

  console.log(loading);
  return (
    <>
      {" "}
      {loading && (
        <div className="loader_container">
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        </div>
      )}
      {!loading && (
        <main class="productlisting_main_container">
          <Filter />
          <FilteredProducts />
        </main>
      )}
    </>
  );
};

export { ProductsListing };
