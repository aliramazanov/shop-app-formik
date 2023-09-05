import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions/actionTypes";

const initialState = {
  favourites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      if (
        !state.favourites.some((item) => item.id === action.payload.product.id)
      ) {
        const updatedFavorites = [...state.favourites, action.payload.product];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        return {
          ...state,
          favourites: updatedFavorites,
        };
      }
    case REMOVE_FROM_FAVOURITES:
      const updatedFavorites = state.favourites.filter(
        (item) => item.id !== action.payload.product.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return {
        ...state,
        favourites: updatedFavorites,
      };
    default:
      return state;
  }
};
