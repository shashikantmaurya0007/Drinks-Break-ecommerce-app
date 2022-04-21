import React from "react";
import {
  useCart,
  addItemToCart,
  isAlreadyExistInCart,
  useWishList,
  removeFromWishList,
  useUser,
} from "../state/index";
import "../styles/ProductListing.css";
import { useNavigate } from "react-router-dom";

const WishListCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    _id: id,
    brand,
    price,
    img,
    discountPercent,
    finalPrice,
    category,
    title,

    rating = 3.5,
  } = product;
  const {
    cartDispatch,
    cartState: { cartProducts },
  } = useCart();
  const {
    user: { encodedToken },
  } = useUser();
  console.log(encodedToken);
  const { wishlistDispatch } = useWishList();

  return (
    <div
      className={`card card_overlay shopping_card card_shadow vertical ${"offer"}`}
    >
      {
        <p className="card_text_badge">
          <i class="bi bi-emoji-heart-eyes"></i>
          <i class="bi bi-emoji-kiss-fill"></i>
        </p>
      }

      <div className="img-container">
        <img className="product_image" src={img} alt={category} />
      </div>
      <div className="lower-card">
        <header style={{ paddingTop: "10px" }}>
          <h3
            style={{
              fontWeight: "700",
              letterSpacing: "1px",
              fontSize: "0.8rem",
            }}
          >
            {title}
          </h3>
          <p className="header-description">By {brand}</p>
        </header>
        <p className="card-description">
          <span className="product_price">₹{finalPrice} </span>
          <strike>₹{price}</strike>
          <span className="card_discount">{discountPercent}% off</span>
          <span className="product_rating">{rating}⭐</span>
        </p>
        <div className="btn-container">
          {isAlreadyExistInCart(cartProducts, id) ? (
            <p
              onClick={() => navigate("/cart")}
              className="card_btn btn btn-primary btn-solid"
            >
              Go To Cart <i class="bi bi-cart-fill"></i>
            </p>
          ) : (
            <p
              onClick={() => addItemToCart(cartDispatch, product, encodedToken)}
              className="card_btn btn btn-primary btn-solid"
            >
              Add To Cart<i class="bi bi-cart-fill"></i>
            </p>
          )}

          <p
            onClick={() =>
              removeFromWishList(id, wishlistDispatch, encodedToken)
            }
            className="card_btn btn btn-primary btn-outline"
          >
            Remove <i class="bi bi-heart-half"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export { WishListCard };
