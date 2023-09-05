import { CLOSE_MODAL, OPEN_MODAL } from "./actionTypes";

export const openModal = (modalDataItem, products) => ({
  type: OPEN_MODAL,
  payload: { modalDataItem, products },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
