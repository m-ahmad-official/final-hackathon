"use client";

import { Wishlist } from "@/app/utils/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Wishlist[] = [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        const uuid = Math.floor(1000 + Math.random() * 10000);
        state.push({ ...action.payload, uuid });
      }
    },

    removeFromWishlist(state, { payload }) {
      return state.filter((item) => item.uuid !== payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
