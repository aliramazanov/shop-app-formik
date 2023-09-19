import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/actions/selectProduct";
import { openModal } from "../../store/actions/modalChanges";
import modalData from "../../modalData";
import "./Button.scss";

export default function Button({ backgroundColor, text, product }) {
  const dispatch = useDispatch();
  const findModalDataById = (modalId) =>
    modalData.find(({ id }) => id === modalId);

  const handleOpenModalButton = (modalId) => {
    const modalDataItem = findModalDataById(modalId);
    dispatch(setSelectedProduct(product));
    dispatch(openModal(modalDataItem, product));
  };

  return (
    <button
      className="button-component"
      style={{ backgroundColor: backgroundColor }}
      onClick={() => handleOpenModalButton("modalOne")}
    >
      {text}
    </button>
  );
}
