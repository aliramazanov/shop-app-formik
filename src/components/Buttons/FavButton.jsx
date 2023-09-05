import "./Button.scss";

export default function FavButton({
  isFavourite,
  makeFavourite,
  makeNonFavourite,
  product,
}) {
  return (
    <button
      className={`custom-button ${isFavourite ? "favourite" : ""}`}
      onClick={() =>
        isFavourite ? makeNonFavourite(product) : makeFavourite(product)
      }
    >
      {isFavourite ? "❤️" : "🖤"}
    </button>
  );
}
