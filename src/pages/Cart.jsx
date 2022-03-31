import React from "react";
import { CartCard } from "../component/CartCard";
import { useCart } from "../state/index";
import "../styles/Cart.css";

const Cart = () => {
  const {
    cartState: { loading, error, cartProducts },
  } = useCart();

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
                <h2>Price(4 items)</h2>
                <h3>₹4000</h3>
              </div>
              <div class="details discount_items">
                <h2>Discount</h2>
                <h3>-₹1600</h3>
              </div>
              <div class="details delivery_charges">
                <h2>Delivery-Charges</h2>
                <h3>Free</h3>
              </div>
              <div class="seperate_sections"></div>
              <div class="details total_amount">
                <h2>Total-Amount</h2>
                <h3>₹2400</h3>
              </div>
              <div class="seperate_sections"></div>
              <a href="#" class="btn btn-primary btn-solid">
                Checkout
              </a>
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
