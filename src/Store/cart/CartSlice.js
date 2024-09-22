import { createSlice } from "@reduxjs/toolkit";
import { addToCart} from "../thunk";

const initialState = {
  carts: {},
  status: 'idle',
  error: '',
  notify: false
};

const CartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
        state.error = 'nil';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "product added to cart successfully";
        state.error = 'nil';
        state.notify = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unable to get cart, Please try again later";  
      });
  }
});

export default CartSlice.reducer;
