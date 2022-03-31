import React, { useState, useEffect } from "react";

import { CartCard } from "../component/CartCard";
import { useCart, calculatePriceDetails } from "../state/index";
import "../styles/Cart.css";

const Cart = () => {
  const {
    cartState: { loading, error, cartProducts },
  } = useCart();

  const [priceDetails, setPriceDetails] = useState({
    totalCostPrice: 0,
    totalQty: 0,
    totalDiscount: 0,
    totalAmountToPay: 0,
  });
  useEffect(() => {
    calculatePriceDetails(cartProducts, setPriceDetails);
  }, [cartProducts]);

  const { totalCostPrice, totalQty, totalDiscount, totalAmountToPay } =
    priceDetails;
  return (
    <>
      {cartProducts.length > 0 && (
        <main class="cart_management_container">
          <section class="cart_products">
            <h1
              style={{
                fontWeight: "800",
                paddingTop: "1rem",
                letterSpacing: "2px",
                opacity: 0.6,
              }}
            >
              Total Products {cartProducts.length}
            </h1>
            {cartProducts.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </section>
          <section class="cart_products_sum">
            <div class="cart_price_details">
              <h1>Price Details</h1>

              <div class="seperate_sections"></div>
              <div class="details price_item_qty">
                <h2>Price({totalQty} items)</h2>
                <h3>₹{totalCostPrice}</h3>
              </div>
              <div class="details discount_items">
                <h2>Discount</h2>
                <h3>-₹{totalDiscount}</h3>
              </div>
              <div class="details delivery_charges">
                <h2>Delivery-Charges</h2>
                <h3>Free</h3>
              </div>
              <div class="seperate_sections"></div>
              <div class="details total_amount">
                <h2>Total Amount to Pay</h2>
                <h3>₹{totalAmountToPay}</h3>
              </div>
              <div class="seperate_sections"></div>
              <p class="btn btn-primary btn-solid">Checkout</p>
            </div>
          </section>
        </main>
      )}

      {!cartProducts.length && (
        <h1
          style={{
            fontWeight: "800",
            paddingTop: "1rem",
            letterSpacing: "2px",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          You have not yet added any item to cart! :)
        </h1>
      )}
    </>
  );
};

export { Cart };
