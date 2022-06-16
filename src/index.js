import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  ProductProvider,
  FilterProvider,
  UserProvider,
  CartProvider,
  WishListProvider,
  SearchProvider,
} from "./state/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SearchProvider>
        <ProductProvider>
          <FilterProvider>
            <UserProvider>
              <WishListProvider>
                <CartProvider>
                  <App />
                </CartProvider>{" "}
              </WishListProvider>{" "}
            </UserProvider>{" "}
          </FilterProvider>{" "}
        </ProductProvider>{" "}
      </SearchProvider>
    </Router>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
