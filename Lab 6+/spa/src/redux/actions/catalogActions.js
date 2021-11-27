import { ActionsTypes } from "../constants/actionsTypes";

export const setCatalogItems = (items) => {
  return {
    type: ActionsTypes.SET_CATALOG_ITEMS,
    payload: items,
  };
};
