import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Cart,
  WishList,
  ProductsListing,
  Login,
  Signup,
} from "../pages/index.js";
const DrinksBreakRoutes = () => {
  return (
    <div className="routes_height">
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export { DrinksBreakRoutes };
