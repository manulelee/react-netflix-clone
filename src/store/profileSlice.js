import { createSlice } from "@reduxjs/toolkit";
import { PROFILE_IMAGES as IMAGES } from "../utils/http";
const initialState = {
  profile: {
    name: "Emanuele",
    surname: "Syrbe",
    email: "emanuele@gmail",
    password: "qwerty",
    username: "lele",
    selectedAvatar: IMAGES[1],
  },
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    replaceProfile(state, action) {
      console.log(action.payload);
      state.profile = action.payload;
    },
  },
});

export const { replaceProfile } = profileSlice.actions;

export default profileSlice.reducer;
