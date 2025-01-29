// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./features/cart";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// // ...

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const reducer = combineReducers({ cart: cartSlice });

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cart";

// Persist Config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Combine Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable warnings for non-serializable data
    }),
});

// Persistor
export const persistor = persistStore(store);

// Infer Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
