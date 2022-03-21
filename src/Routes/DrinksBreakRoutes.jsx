import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Cart,
  WishList,
  ProductsListing,
} from "../pages/index.js";
const DrinksBreakRoutes = () => {
  return (
    <div className="routes_height">
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/products" element={<ProductsListing />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
};

export { DrinksBreakRoutes };
