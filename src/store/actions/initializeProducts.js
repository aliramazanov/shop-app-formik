import { LOADING_POSTS, SUCCESS_POSTS, ERROR_POSTS } from "./actionTypes";

export const initializeProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING_POSTS,
    });
    try {
      const response = await fetch("/data/data.JSON");
      const data = await response.json();
      dispatch({
        type: SUCCESS_POSTS,
        payload: { products: data.products },
      });
    } catch (error) {
      dispatch({ type: ERROR_POSTS });
    }
  };
};
