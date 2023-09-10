import Product from "../Products/Product";
import "./productList.scss";

export default function ProductList({ products, isBasketPage }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={`${product.id}-${index}`}
          product={product}
          isBasketPage={isBasketPage}
        />
      ))}
    </div>
  );
}
