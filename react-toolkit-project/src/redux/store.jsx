import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./categorySlice";

import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    categoryState: categoryReducer,
    authState: authReducer,
  },
});

export default store;
