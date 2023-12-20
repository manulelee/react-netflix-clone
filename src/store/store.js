import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";
import profileSlice from "./profileSlice";

const rootReducer = combineReducers({
  favorites: favoriteSlice,
  profile: profileSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
