import React from "react";
import "./styleProductsCard.css";

function ProductsCard({urlImg, price, title}) {
  function evento(img, titulo, preco){
    
  }
  return (
    <>
      <li onClick={() => {
        evento(urlImg, title, price);
      }}>
        <div class="card">
          <div class="image">
            <img src={urlImg} />
          </div>
          <span class="title">{title}</span>
          <span class="price">R${price}</span>
          <button className="button-add-to-cart">ADD</button>
        </div>
      </li>
    </>
  );
}

export default ProductsCard;
