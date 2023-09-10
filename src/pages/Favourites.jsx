import React from "react";
import ProductList from "../components/ProductList/ProductList";
import Modal from "../components/Modal/Modal";
import "./PageStyles.scss";
import { useSelector } from "react-redux";

export default function Favourites() {
  const favourites = useSelector(
    (state) => state.favouritedProducts.favourites
  );
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  return (
    <div className="favourites-page">
      <h2 className="pages-hero">Discover Your Exquisite Collection</h2>
      <ProductList products={favourites} isBasketPage={false} />
      {isModalOpen && <Modal />}
    </div>
  );
}
