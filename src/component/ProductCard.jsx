import React from "react";
import {
  useCart,
  addItemToCart,
  isAlreadyExistInCart,
  useWishList,
  addToWishList,
  useUser,
  isAlreadyExistInWishList,
  removeFromWishList,
  useSearch,
  useFilter,
  FILTER_ACTION,
} from "../state/index";
import "../styles/ProductListing.css";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../customHooks/useDebounce";
import { filterinitialstate } from "../state";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    filterDispatch,
    filterstate: { searchText },
  } = useFilter();

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
  const {
    wishlistDispatch,
    wishliststate: { wishlistproducts },
  } = useWishList();
  const {
    user: { isLoggedIn, encodedToken },
  } = useUser();

  const addToCart = (e) => {
    e.stopPropagation();

    isLoggedIn
      ? addItemToCart(cartDispatch, product, encodedToken)
      : navigate("/login");
  };
  const addToWishList_ = (e) => {
    e.stopPropagation();
    isLoggedIn
      ? addToWishList(product, wishlistDispatch, encodedToken)
      : navigate("/login");
  };
  const removeFromWishList_ = (e) =>
    removeFromWishList(id, wishlistDispatch, encodedToken);
  const debounceAddToCart = useDebounce(addToCart, 400);
  const debounceAddToWishList = useDebounce(addToWishList_, 400);
  const debounceRemoveFromWishList = useDebounce(removeFromWishList_, 400);
  const { setShowSearchModal } = useSearch();
  const closeSearchBar = () => {
    setShowSearchModal((prev) => false);
    filterDispatch({
      type: FILTER_ACTION.SORT_BY_SEARCH,
      payload: {
        ...filterinitialstate,
        searchText: "",
      },
    });
  };
  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
        closeSearchBar();
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
                closeSearchBar();
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

          {!Boolean(isAlreadyExistInWishList(wishlistproducts, id)) ? (
            <p
              onClick={(e) => {
                e.stopPropagation();
                debounceAddToWishList(e);
              }}
              className="card_btn btn btn-primary btn-outline"
            >
              Add to WishList<i class="bi bi-heart-half"></i>
            </p>
          ) : (
            <p
              onClick={(e) => {
                e.stopPropagation();
                debounceRemoveFromWishList(e);
              }}
              className="card_btn btn btn-primary btn-outline"
            >
              Remove WishList<i class="bi bi-heart-half"></i>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
