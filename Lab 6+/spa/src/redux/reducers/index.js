import { combineReducers } from "redux";
import { catalogItemsReducer } from "./catalogReducer";

export const reducers = combineReducers({
  catalogItems: catalogItemsReducer,
});
