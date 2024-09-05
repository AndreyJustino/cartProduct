import React from "react";
import "./styleProductsCard.css";

function ProductsCard({urlImg, price, title}) {
  
  return (
    <>
      <li>
        <div class="card">
          <div class="image">
            <img src={urlImg} />
          </div>
          <span class="title">{title}</span>
          <span class="price">R${price}</span>
        </div>
      </li>
    </>
  );
}

export default ProductsCard;
