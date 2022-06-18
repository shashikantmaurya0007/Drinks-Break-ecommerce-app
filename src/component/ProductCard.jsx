import React from "react";
import {
  useCart,
  addItemToCart,
  isAlreadyExistInCart,
  useWishList,
  addToWishList,
  useUser,
} from "../state/index";
import "../styles/ProductListing.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
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
    offer,
  } = product;
  const {
    cartDispatch,
    cartState: { cartProducts },
  } = useCart();
  const { wishlistDispatch } = useWishList();
  const {
    user: { isLoggedIn, encodedToken },
  } = useUser();
  console.log(cartDispatch);
  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
      }}
      className={`card card_overlay shopping_card card_shadow vertical ${
        offer && "offer"
      }`}
    >
      {offer && <p className="card_text_badge">{offer}</p>}
      {offer === "outOfStock" && (
        <div className="card-overlay-text">
          <span>Out of Stock</span>
        </div>
      )}
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
                isLoggedIn
                  ? addItemToCart(cartDispatch, product, encodedToken)
                  : navigate("/login");
              }}
              className="card_btn btn btn-primary btn-solid"
            >
              Add To Cart<i class="bi bi-cart-fill"></i>
            </p>
          )}

          <p
            onClick={(e) => {
              e.stopPropagation();
              isLoggedIn
                ? addToWishList(product, wishlistDispatch, encodedToken)
                : navigate("/login");
            }}
            className="card_btn btn btn-primary btn-outline"
          >
            Add to WishList<i class="bi bi-heart-half"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
