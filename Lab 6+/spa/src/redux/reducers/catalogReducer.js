import { ActionsTypes } from "../constants/actionsTypes";
const initialState = {
  catalogItems: [],
};

export const catalogItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_CATALOG_ITEMS:
      return { ...state, catalogItems: payload };
    default:
      return state;
  }
};
