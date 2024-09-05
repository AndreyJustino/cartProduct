import React from "react";
import CartProductsCard from "../cartProductsCard/CartProductsCard.jsx";
import "./styleCart.css"

function Cart() {
  const produtos = [{}]
  return (
    <ul className="listaCart">
      {
        produtos.map((value, index) => {
          return (
            <CartProductsCard
              img={value.img}
              price={value.price}
              title={value.title}
            />
          )
        })
      }
      
      

    </ul>
  );
}

export default Cart;
