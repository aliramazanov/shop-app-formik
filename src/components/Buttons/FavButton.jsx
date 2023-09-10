import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../store/actions/favouritesAction";
import "./Button.scss";

export default function FavButton({ product }) {
  const dispatch = useDispatch();

  const makeFavourite = (product) => {
    dispatch(addToFavourites(product));
  };

  const makeNonFavourite = (favourites) => {
    dispatch(removeFromFavourites(favourites));
  };
  const favourites = useSelector(
    (state) => state.favouritedProducts.favourites
  );

  const isFavourite = favourites.some((item) => item.id === product.id);

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
