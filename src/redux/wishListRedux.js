import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    logOutWishList: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, logOutWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
