import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CART_ACTION } from "../state/action";
import { CartCard } from "../component/CartCard";
import { useCart, calculatePriceDetails, useUser } from "../state/index";
import "../styles/Cart.css";
import { displayRazorpay } from "../util/paymentGateway";
import axios from "axios";
const Cart = () => {
  const {
    cartState: { cartProducts },
    cartDispatch,
    setPaymentCelebration,
  } = useCart();
  const {
    user: { encodedToken },
  } = useUser();
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

  const navigate = useNavigate();
  const handlePaymentCelebaration = () => {
    setPaymentCelebration(true);
    setTimeout(() => setPaymentCelebration(false), 3000);
  };

  const clearCart = async (userDispatch) => {
    try {
      await axios.post(
        `/api/user/cart/clearCart`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      cartDispatch({ type: CART_ACTION.CLEARCART });
    } catch (e) {}
  };
  return (
    <>
      {cartProducts.length > 0 && (
        <main class="cart_management_container">
          <section class="cart_products">
            <h1 className="cart_wishlist_header">
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
              <p
                class="btn btn-primary btn-solid"
                onClick={() => {
                  displayRazorpay(
                    totalAmountToPay,
                    navigate,
                    clearCart,
                    handlePaymentCelebaration
                  );
                }}
              >
                Checkout
              </p>
            </div>
          </section>
        </main>
      )}

      {!cartProducts.length && (
        <h1 className="cart_wishlist_header">
          You have not yet added any item to cart! :)
        </h1>
      )}
    </>
  );
};

export { Cart };
