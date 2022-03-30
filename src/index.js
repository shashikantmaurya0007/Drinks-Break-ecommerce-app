import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider, FilterProvider, UserProvider } from "./state/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <FilterProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </FilterProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
