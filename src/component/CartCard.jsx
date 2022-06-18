import React from "react";

import {
  useCart,
  removeItemFromCart,
  changeTheQuantity,
  useUser,
  addToWishList,
  useWishList,
} from "../state/index";

const CartCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const {
    _id: id,
    brand,
    price,
    img,
    discountPercent,
    finalPrice,

    title,
    rating = 3.5,

    qty,
  } = product;
  const {
    user: { encodedToken },
  } = useUser();
  const { wishlistDispatch } = useWishList();

  return (
    <div className="card shopping_card card_shadow horizontal">
      <div className="img-container horizontal_container">
        <img src={img} alt={brand} />
      </div>
      <div className="lower-card">
        <header>
          <h3>{title}</h3>
          <p classNameName="header-description">By {brand}</p>
        </header>
        <p className="card-description">
          <span className="product_price">₹{finalPrice} </span>
          <strike>₹{price}</strike>
          <span className="card_discount">{discountPercent}% off</span>
          <span className="product_rating">{rating}⭐</span>
        </p>
        <div className="cart_product_quantity">
          <p
            onClick={() =>
              changeTheQuantity(cartDispatch, id, "increment", encodedToken)
            }
            className="btn btn-float"
          >
            <span>
              <i className="bi bi-plus"></i>
            </span>
          </p>
          <h1>{qty}</h1>
          <p
            onClick={() => {
              qty > 1 &&
                changeTheQuantity(cartDispatch, id, "decrement", encodedToken);
            }}
            className="btn btn-float"
          >
            <span>
              <i className="bi bi-dash"></i>
            </span>
          </p>
        </div>
        <div className="btn-container">
          <p
            onClick={() => {
              removeItemFromCart(id, cartDispatch, encodedToken);
            }}
            className="btn btn-primary btn-solid card_btn"
          >
            Remove From Cart
          </p>
          <p
            className="btn btn-primary btn-outline card_btn"
            onClick={() =>
              addToWishList(product, wishlistDispatch, encodedToken)
            }
          >
            Add to WishList
          </p>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
