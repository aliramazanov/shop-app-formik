import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeProducts } from "../store/actions/initializeProducts";
import ProductList from "../components/ProductList/ProductList";
import Welcome from "../components/Welcome/Welcome";
import Modal from "../components/Modal/Modal";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProducts());
  }, []);
  const products = useSelector((state) => state.fetchProducts.products);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  return (
    <div>
      <Welcome />
      <ProductList products={products} isBasketPage={false} />
      {isModalOpen && <Modal />}
    </div>
  );
}
