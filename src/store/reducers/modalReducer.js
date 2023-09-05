import { CLOSE_MODAL, OPEN_MODAL } from "../actions/actionTypes";

const initialState = {
  isModalOpen: false,
  selectedProduct: null,
  currentModalData: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedProduct: action.payload.products,
        currentModalData: action.payload.modalDataItem,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedProduct: null,
        currentModalData: null,
      };
    default:
      return state;
  }
};
