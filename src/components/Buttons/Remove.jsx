import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../store/actions/basketActions";
import "./Button.scss";

export default function RemoveButton({ productId }) {
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch(removeFromBasket(productId));
  };
  return (
    <button className="remove-button" onClick={removeProduct}>
      Remove
    </button>
  );
}
