import ProductList from "../components/ProductList/ProductList";
import Welcome from "../components/Welcome/Welcome";
import Modal from "../components/Modal/Modal";

export default function Home({
  favourites,
  products,
  handleOpenModalButton,
  isModalOpen,
  currentModalData,
  closeModal,
  handleContinueButtonClick,
  makeFavourite,
  makeNonFavourite,
}) {
  return (
    <div>
      <Welcome />
      <ProductList
        products={products}
        favourites={favourites}
        isBasketPage={false}
        handleOpenModalButton={handleOpenModalButton}
        makeFavourite={makeFavourite}
        makeNonFavourite={makeNonFavourite}
      />
      {isModalOpen && (
        <Modal
          details={currentModalData}
          closeModal={closeModal}
          handleContinueButtonClick={handleContinueButtonClick}
        />
      )}
    </div>
  );
}
