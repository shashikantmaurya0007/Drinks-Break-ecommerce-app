import React from "react";

const CartCard = ({ product }) => {
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
    qty,
  } = product;
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
          <a href="#" className="btn btn-float">
            <span>
              <i className="bi bi-plus"></i>
            </span>
          </a>
          <h1>{qty}</h1>
          <a href="#" className="btn btn-float">
            <span>
              <i className="bi bi-dash"></i>
            </span>
          </a>
        </div>
        <div className="btn-container">
          <p className="btn btn-primary btn-solid card_btn">Remove From Cart</p>
          <p className="btn btn-primary btn-outline card_btn">
            Add to WishList
          </p>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
