import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/ProductSlice";
import cartReducer from "./cart/CartSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer
  }
});

export default store;
