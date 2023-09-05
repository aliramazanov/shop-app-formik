import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { initializeProducts } from "./store/actions/initializeProducts";
import { addToBasket, removeFromBasket } from "./store/actions/basketActions";
import { closeModal, openModal } from "./store/actions/modalChanges";
import {
  addToFavourites,
  removeFromFavourites,
} from "./store/actions/favouritesAction";
import {
  clearSelectedProduct,
  setSelectedProduct,
} from "./store/actions/selectProduct";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import About from "./pages/About";
import Header from "./components/Header/Header";
import modalData from "./modalData.jsx";

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.fetchProducts.products);
  const basket = useSelector((state) => state.basketProducts.basket);
  const currentModalData = useSelector((state) => state.modal.currentModalData);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const favourites = useSelector(
    (state) => state.favouritedProducts.favourites
  );

  useEffect(() => {
    dispatch(initializeProducts());
  }, []);

  const makeFavourite = (product) => {
    dispatch(addToFavourites(product));
  };

  const makeNonFavourite = (favourites) => {
    dispatch(removeFromFavourites(favourites));
  };

  const handleContinueButtonClick = () => {
    if (selectedProduct) {
      dispatch(addToBasket(selectedProduct));
      dispatch(clearSelectedProduct());
      dispatch(closeModal());
    }
  };

  const removeProduct = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  const findModalDataById = (modalId) =>
    modalData.find(({ id }) => id === modalId);

  const handleOpenModalButton = (modalId, products) => {
    const modalDataItem = findModalDataById(modalId);
    dispatch(setSelectedProduct(products));
    dispatch(openModal(modalDataItem, products));
  };

  const handleClosingOfModal = () => {
    dispatch(clearSelectedProduct());
    dispatch(closeModal());
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    resetForm();
  };

  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <div className="header-wrapper">
            <Header basket={basket} favourites={favourites} />
          </div>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  favourites={favourites}
                  products={products}
                  isModalOpen={isModalOpen}
                  handleOpenModalButton={handleOpenModalButton}
                  currentModalData={currentModalData}
                  closeModal={handleClosingOfModal}
                  handleContinueButtonClick={handleContinueButtonClick}
                  makeFavourite={makeFavourite}
                  makeNonFavourite={makeNonFavourite}
                />
              }
            />

            <Route
              path="/favourites"
              element={
                <Favourites
                  favourites={favourites}
                  isModalOpen={isModalOpen}
                  products={favourites}
                  currentModalData={currentModalData}
                  closeModal={handleClosingOfModal}
                  handleOpenModalButton={handleOpenModalButton}
                  handleContinueButtonClick={handleContinueButtonClick}
                  makeFavourite={makeFavourite}
                  makeNonFavourite={makeNonFavourite}
                />
              }
            />

            <Route
              path="/basket"
              element={
                <Basket
                  products={basket}
                  removeProduct={removeProduct}
                  makeFavourite={makeFavourite}
                  makeNonFavourite={makeNonFavourite}
                  favourites={favourites}
                  handleSubmit={handleSubmit}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
