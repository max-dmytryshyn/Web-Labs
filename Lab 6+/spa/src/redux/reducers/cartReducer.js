import { actionsTypes } from "../constants/actionsTypes";
const initialState = {
  cartItems: [],
};

export const cartItemsReducer = (state = initialState, action) => {
  let item_index = state.cartItems.findIndex((cartItem) => cartItem.id === action.itemId);
  switch (action.type) {
    case actionsTypes.ADD_ITEM_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.item] };

    case actionsTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: [...state.cartItems.slice(0, item_index), ...state.cartItems.slice(item_index + 1)],
      };

    case actionsTypes.INCREASE_ITEM_AMOUNT_IN_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, item_index),
          {
            ...state.cartItems[item_index],
            amount: state.cartItems[item_index].amount + 1,
          },
          ...state.cartItems.slice(item_index + 1),
        ],
      };

    case actionsTypes.DECREASE_ITEM_AMOUNT_IN_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, item_index),
          {
            ...state.cartItems[item_index],
            amount: state.cartItems[item_index].amount - 1,
          },
          ...state.cartItems.slice(item_index + 1),
        ],
      };

    default:
      return state;
  }
};
