import "./styleProductPagesLayout.css";
import ProductsList from "../productsList/productsList";
import Cart from "../cart/Cart";
import { useState } from "react";

function ProductPagesLayout() {
  const [cart, setCart] = useState([])
  return (
    <main className="product-pages-layout">
      <section>
        <ProductsList setCart={setCart} cart={cart}/>
      </section>
      <section>
        <Cart cart={cart}/>
      </section>
    </main>
  );
}

export default ProductPagesLayout;
