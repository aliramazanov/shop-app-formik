import { combineReducers } from "redux";
import { initializeProductsReducer } from "./initializeProductsReducer";
import { basketReducer } from "./basketReducer";
import { favouritesReducer } from "./favouritesReducer";
import { modalReducer } from "./modalReducer";
import { selectedProductReducer } from "./selectProductReducer";

const rootReducer = combineReducers({
  fetchProducts: initializeProductsReducer,
  basketProducts: basketReducer,
  favouritedProducts: favouritesReducer,
  modal: modalReducer,
  selectedProduct: selectedProductReducer,
});

export default rootReducer;
