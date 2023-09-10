import Button from "../Buttons/Button";
import FavButton from "../Buttons/FavButton";
import RemoveButton from "../Buttons/Remove";
import "./product.scss";

export default function Product({ backgroundColor, isBasketPage, product }) {
  const { id, imgPath, name, price, SKU } = product;

  return (
    <div className={`product-component-wrapper ${backgroundColor}`}>
      <div className="product-image-wrapper">
        <img src={imgPath} alt="Product Image" />
      </div>
      <div className="product-info-actions">
        <div className="product-info">
          <h1 className="product-title">{name}</h1>
          <span className="product-infos">
            <b>Price:</b> {price}$
          </span>
          <br />
          <span className="product-infos">
            <b>SKU: </b>
            {SKU}
          </span>
        </div>
        <div className="buttons">
          {!isBasketPage && (
            <Button backgroundColor="black" text="Basket" product={product} />
          )}
          {isBasketPage && <RemoveButton productId={id} />}
          <FavButton product={product} />
        </div>
      </div>
    </div>
  );
}
