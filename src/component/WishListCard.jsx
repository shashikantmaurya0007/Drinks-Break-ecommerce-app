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
import { useDebounce } from "../customHooks/useDebounce";

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
  encodedToken;
  const { wishlistDispatch } = useWishList();
  const addToCart = (e) => {
    e.stopPropagation();

    addItemToCart(cartDispatch, product, encodedToken);
  };

  const removeFromWishList_ = (e) =>
    removeFromWishList(id, wishlistDispatch, encodedToken);
  const debounceAddToCart = useDebounce(addToCart, 800);

  const debounceRemoveFromWishList = useDebounce(removeFromWishList_, 400);

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
        <img className="product_image contain" src={img} alt={category} />
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
              onClick={(e) => {
                e.stopPropagation();
                navigate("/cart");
              }}
              className="card_btn btn btn-primary btn-solid"
            >
              Go To Cart <i class="bi bi-cart-fill"></i>
            </p>
          ) : (
            <p
              onClick={(e) => {
                e.stopPropagation();
                debounceAddToCart(e);
              }}
              className="card_btn btn btn-primary btn-solid"
            >
              Add To Cart<i class="bi bi-cart-fill"></i>
            </p>
          )}

          {
            <p
              onClick={(e) => {
                e.stopPropagation();
                debounceRemoveFromWishList(e);
              }}
              className="card_btn btn btn-primary btn-outline"
            >
              Remove WishList<i class="bi bi-heart-half"></i>
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export { WishListCard };
