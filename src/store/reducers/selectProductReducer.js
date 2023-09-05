import {
  SET_SELECTED_PRODUCT,
  CLEAR_SELECTED_PRODUCT,
} from "../actions/actionTypes";

const initialState = null;

export const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT:
      return action.payload;
    case CLEAR_SELECTED_PRODUCT:
      return null;
    default:
      return state;
  }
};
