import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOutUser: (state) => {
      console.log("this is the state: " + state.currentUser);
      state.currentUser = null;
      console.log("state changed to null");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOutUser } =
  userSlice.actions;
export default userSlice.reducer;
