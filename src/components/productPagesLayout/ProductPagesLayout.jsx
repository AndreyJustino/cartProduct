import "./styleProductPagesLayout.css";
import ProductsList from "../productsList/productsList";
import Cart from "../cart/Cart";

function ProductPagesLayout() {
  return (
    <main className="product-pages-layout">
      <section>
        <ProductsList />
      </section>
      <section>
        <Cart />
      </section>
    </main>
  );
}

export default ProductPagesLayout;
