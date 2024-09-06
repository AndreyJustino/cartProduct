import React from "react";
import CartProductsCard from "../cartProductsCard/CartProductsCard.jsx";
import "./styleCart.css";

function Cart({cart}) {
  return (
    <ul className="listaCart">
      {cart.map((value, index) => {
        return (
          <CartProductsCard
            img={value.urlImg}
            price={value.price}
            title={value.title}
          />
        );
      })}
    </ul>
  );
}

export default Cart;
