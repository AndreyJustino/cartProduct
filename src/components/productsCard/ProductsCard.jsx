import React from "react";
import "./styleProductsCard.css";

function ProductsCard({urlImg, price, title, addToCart}) {
  return (
    <>
      <li>
        <div className="card">
          <div className="image">
            <img src={urlImg} />
          </div>
          <span className="title">{title}</span>
          <span className="price">R${price}</span>
          <button className="button-add-to-cart" onClick={addToCart}>ADD to cart</button>
        </div>
      </li>
    </>
  );
}

export default ProductsCard;
