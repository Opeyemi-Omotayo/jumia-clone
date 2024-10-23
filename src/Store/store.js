import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/ProductSlice";
import cartReducer from "./cart/CartSlice"
import categoriesReducer from "./categories/CategoriesSlice";
import authReducer from "./auth/AuthSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
    categories: categoriesReducer,
    auth: authReducer,
  }
});

export default store;
