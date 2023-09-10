import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProduct } from "../../store/actions/selectProduct";
import { addToBasket } from "../../store/actions/basketActions";
import { closeModal } from "../../store/actions/modalChanges";
import "./Modal.scss";

export default function Modal() {
  const details = useSelector((state) => state.modal.currentModalData);
  const { header, text, actions, renderButton } = details;
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const handleContinueButtonClick = () => {
    if (selectedProduct) {
      dispatch(addToBasket(selectedProduct));
      dispatch(clearSelectedProduct());
      dispatch(closeModal());
    }
  };

  const handleClosingOfModal = () => {
    dispatch(clearSelectedProduct());
    dispatch(closeModal());
  };

  return (
    <div className="modal-part" onClick={handleClosingOfModal}>
      <div
        className="modal-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="header-part-modal">
          <div className="header-of-modal">{header}</div>
          <div className="header-close-button">
            {renderButton && (
              <button
                className="modal-close-button"
                onClick={handleClosingOfModal}
              >
                X
              </button>
            )}
          </div>
        </div>
        <div className="modal-content">
          <div className="text-of-modal">{text}</div>
          <div className="actions-of-modal">
            <div className="actions-of-modal">
              {actions(handleClosingOfModal, handleContinueButtonClick)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
