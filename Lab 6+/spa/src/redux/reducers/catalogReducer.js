import { actionsTypes } from "../constants/actionsTypes";
const initialState = {
  catalogItems: [],
};

export const catalogItemsReducer = (state = initialState, { type, items }) => {
  switch (type) {
    case actionsTypes.SET_CATALOG_ITEMS:
      return { ...state, catalogItems: items };
    default:
      return state;
  }
};
