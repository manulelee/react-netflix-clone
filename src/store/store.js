import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: favoriteSlice,
});

export default store;
