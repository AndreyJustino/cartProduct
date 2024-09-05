import React from "react";
import "./styleCartProducts.css";

function CartProductsCard({img,title, price}) {
  return (
    <>
      <li className="elementLiCart">
        <div class="cardCart">
          <div class="cardCart_load"><img src={img}/></div>
          <div class="cardCart_load_extreme_title"><h1>{title}</h1></div>
          <div class="cardCart_load_extreme_descripion"><h1>{price}</h1></div>
        </div>
      </li>
    </>
  );
}

export default CartProductsCard;
