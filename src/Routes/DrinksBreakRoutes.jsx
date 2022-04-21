import MockmanEs from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Error } from "../component/Error";
import {
  LandingPage,
  Cart,
  WishList,
  ProductsListing,
  Login,
  Signup,
} from "../pages/index.js";
import { RequireAuth } from "../component/index";
const DrinksBreakRoutes = () => {
  return (
    <div className="routes_height">
      <Routes>
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<MockmanEs />} />
        <Route path="*" element={<Error />} />

        <Route path="/" element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </div>
  );
};

export { DrinksBreakRoutes };
