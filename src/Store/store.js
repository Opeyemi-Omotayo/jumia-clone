import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/ProductSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  }
});

export default store;
