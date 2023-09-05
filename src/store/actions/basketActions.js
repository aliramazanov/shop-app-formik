import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionTypes";

export const addToBasket = (product) => {
  return {
    type: ADD_TO_BASKET,
    payload: { product: product },
  };
};

export const removeFromBasket = (productId) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload: { productId: productId },
  };
};
