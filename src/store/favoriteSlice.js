import { createSlice } from "@reduxjs/toolkit";

const initialState = { favorite: [] };
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log(action.payload);
      state.favorite.push(action.payload);
    },
    removeFromFavorites(state, action) {
      console.log(action.payload);
      state.favorite = state.favorite.filter((favorite) => favorite.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
