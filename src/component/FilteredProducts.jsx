import React from "react";
import { useFilter, useProducts } from "../state/index";
import { ProductCard } from "./index";
import { applyFilter } from "../util/applyFilter";
const FilteredProducts = () => {
  const {
    productsState: { products },
  } = useProducts();
  const { filterstate } = useFilter();

  const filteredProducts = applyFilter(products, filterstate);

  return (
    <>
      <section className="productslist_container">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </>
  );
};

export { FilteredProducts };
