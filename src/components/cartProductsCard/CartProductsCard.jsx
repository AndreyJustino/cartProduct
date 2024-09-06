import React from "react";
import "./styleCartProducts.css";

function CartProductsCard({img,title, price}) {
  return (
    <>
      <li className="elementLiCart">
        <div class="cardCart">
          <div class="cardCart_load"><img src={img}/></div>
          <div className="containerCart">
            <div class="cardCart_load_extreme_title">{title}</div>
            <div class="cardCart_load_extreme_descripion">R$ {price}</div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartProductsCard;
