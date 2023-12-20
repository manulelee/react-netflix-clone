import { createSlice } from "@reduxjs/toolkit";

const initialState = { favorites: [] };
export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log(action.payload);
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      console.log(action.payload);
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
