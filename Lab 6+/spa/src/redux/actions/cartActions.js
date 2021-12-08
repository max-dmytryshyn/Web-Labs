import { actionsTypes } from "../constants/actionsTypes";

export const addItemToCart = (item) => {
  return {
    type: actionsTypes.ADD_ITEM_TO_CART,
    item: item,
  };
};

export const removeItemFromCart = (itemId) => {
  return {
    type: actionsTypes.REMOVE_ITEM_FROM_CART,
    itemId: itemId,
  };
};

export const increaseItemAmount = (itemId) => {
  return {
    type: actionsTypes.INCREASE_ITEM_AMOUNT_IN_CART,
    itemId: itemId,
  };
};

export const decreaseItemAmount = (itemId) => {
  return {
    type: actionsTypes.DECREASE_ITEM_AMOUNT_IN_CART,
    itemId: itemId,
  };
};
