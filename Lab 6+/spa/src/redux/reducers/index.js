import { combineReducers } from "redux";
import { catalogItemsReducer } from "./catalogReducer";
import { cartItemsReducer } from "./cartReducer";

export const reducers = combineReducers({
  catalogItems: catalogItemsReducer,
  cartItems: cartItemsReducer,
});
