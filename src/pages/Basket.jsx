import { useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList/ProductList";
import InputForm from "../components/InputForm/InputForm";
import inputValidation from "../components/InputForm/InputValidation.js";
import "./PageStyles.scss";

export default function Basket() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);
  const favourites = useSelector(
    (state) => state.favouritedProducts.favourites
  );
  const basket = useSelector((state) => state.basketProducts.basket);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPurchaseSuccessful(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay-purchase")) {
      closeModal();
    }
  };

  const handlePurchaseSuccessful = () => {
    setPurchaseSuccessful(true);
    setTimeout(() => {
      closeModal();
    }, 5000);
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <div className="basket-page">
      <h2 className="pages-hero">Curated Delights Await in Your Basket</h2>
      <button className="purchase-all" onClick={openModal}>
        Purchase All
      </button>
      <ProductList
        favourites={favourites}
        products={basket}
        isBasketPage={true}
      />
      {isModalOpen && (
        <div className="modal-overlay-purchase" onClick={handleModalClick}>
          <div className="modal-purchase-wrapper">
            <div className="purchase-modal-close">
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="modal-content-purchase">
              {purchaseSuccessful ? (
                <div className="purchase-success-message">
                  Purchase Successful!
                </div>
              ) : (
                <InputForm
                  inputValidation={inputValidation}
                  handleSubmit={(values, actions) => {
                    handleSubmit(values, actions);
                    handlePurchaseSuccessful();
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
