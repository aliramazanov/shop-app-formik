import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const addedBasket = [...state.basket, action.payload.product];
      localStorage.setItem("basket", JSON.stringify(addedBasket));

      return {
        ...state,
        basket: addedBasket,
      };
    case REMOVE_FROM_BASKET:
      const filteredBasket = state.basket.filter(
        (item) => item.id !== action.payload.productId
      );
      localStorage.setItem("basket", JSON.stringify(filteredBasket));

      return {
        ...state,
        basket: filteredBasket,
      };
    default:
      return state;
  }
};
