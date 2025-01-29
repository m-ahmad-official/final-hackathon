// "use client";

// import { Cart } from "@/app/utils/type1";
// import { createSlice } from "@reduxjs/toolkit";

// // Define the initial state using that type
// const initialState: Cart[] = [];

// export const cartSlice = createSlice({
//   name: "cart",
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       // Check if the item already exists in the cart
//       const existingItem = state.find(
//         (item) => item._id === action.payload._id
//       );

//       if (existingItem) {
//         // If the item exists, increment its quantity
//         existingItem.qty += 1;
//       } else {
//         // If the item doesn't exist, add it with an initial quantity of 1
//         let uuid = Math.floor(1000 + Math.random() * 9000); // Generate a unique ID
//         let newObj = { ...action.payload, uuid, qty: 1 }; // Add a `qty` property
//         state.push(newObj);
//       }
//     },

//     delItem(state, { payload }) {
//       return state.filter((val) => val.uuid !== payload);
//     },
//     // addCart(state, action) {
//     //   let obj = state.find(
//     //     (val) => val._id == action.payload._id && val._id == action.payload._id
//     //   );
//     // },
//     incrementQty(state, action) {
//       const item = state.find((i) => i.uuid === action.payload.uuid);
//       if (item) {
//         item.qty += 1;
//       }
//     },
//     decrementQty(state, action) {
//       const item = state.find((i) => i.uuid === action.payload.uuid);
//       if (item && item.qty > 1) {
//         item.qty -= 1;
//       } else {
//         // If quantity is 1, remove the item from the cart
//         return state.filter((val) => val.uuid !== action.payload.uuid);
//       }
//     },
//   },
// });

// export const { addToCart, delItem, incrementQty, decrementQty } =
//   cartSlice.actions;

// export default cartSlice.reducer;

"use client";

import { Cart } from "@/app/utils/type1";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action) {
      // Check if the item already exists in the cart
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        // If the item exists, increment its quantity
        existingItem.qty += 1;
      } else {
        // If the item doesn't exist, add it with an initial quantity of 1
        const uuid = Math.floor(1000 + Math.random() * 9000); // Generate a unique ID
        const newObj = { ...action.payload, uuid, qty: 1 }; // Add a `qty` property
        state.push(newObj);
      }
    },

    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    incrementQty(state, action) {
      const item = state.find((i) => i.uuid === action.payload.uuid);
      if (item) {
        item.qty += 1;
      }
    },
    decrementQty(state, action) {
      const item = state.find((i) => i.uuid === action.payload.uuid);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        // If quantity is 1, remove the item from the cart
        return state.filter((val) => val.uuid !== action.payload.uuid);
      }
    },
  },
});

export const { addToCart, delItem, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
