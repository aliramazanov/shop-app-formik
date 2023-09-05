import { LOADING_POSTS, SUCCESS_POSTS } from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: true,
  success: false,
  error: false,
};

export const initializeProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        success: false,
        loading: true,
        error: false,
      };

    case SUCCESS_POSTS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        success: true,
      };
    default:
      return state;
  }
};
