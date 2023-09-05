import Product from "../Products/Product";
import "./productList.scss";

export default function ProductList({
  products,
  handleOpenModalButton,
  removeProduct,
  favourites,
  isBasketPage,
  makeFavourite,
  makeNonFavourite,
}) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={`${product.id}-${index}`}
          product={product}
          isBasketPage={isBasketPage}
          handleOpenModalButton={handleOpenModalButton}
          removeProduct={removeProduct}
          favourites={favourites}
          makeFavourite={makeFavourite}
          makeNonFavourite={makeNonFavourite}
        />
      ))}
    </div>
  );
}
