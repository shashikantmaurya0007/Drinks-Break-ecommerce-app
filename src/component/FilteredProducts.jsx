import React, { useEffect } from "react";
import { useFilter, useProducts } from "../state/index";
import { ProductCard } from "./index";
import { applyFilter } from "../util/applyFilter";
import { FILTER_ACTION } from "../state/action";
import { filterinitialstate } from "../state/initalstate";
const FilteredProducts = () => {
  const {
    productsState: { products },
  } = useProducts();
  const { filterstate, filterDispatch } = useFilter();

  const filteredProducts = applyFilter(products, filterstate);
  useEffect(() => {
    return () => {
      filterDispatch({
        type: FILTER_ACTION.SORT_BY_SEARCH,
        payload: { ...filterinitialstate, searchText: "" },
      });
    };
  }, []);

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
