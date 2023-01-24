import { createSlice } from "@reduxjs/toolkit";
import { setTokenLocal } from "../../utils/localStorage.util";

const initialState = {
  userInfo: null,
  userToken: null,
};

//internally using immer lib (can create mutable state)
export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload;
      // state.userInfo.name = "mihir"
    },
    updateToken: (state, action) => {
      setTokenLocal(action.payload);
      state.userToken = action.payload;
    },
  },
});

// this is for dispatch
export const { updateUser, updateToken } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
