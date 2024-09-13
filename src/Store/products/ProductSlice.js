import { createSlice } from "@reduxjs/toolkit"
import { getAllProducts } from "../thunk";

const initialState = {
  products: [],
  status: 'idle',
  error: ''
}

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = 'loading'
        state.error = 'nil'
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "success"
        state.products = action.payload;
        state.error = 'nil'
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error?.message || "Unable to get products, Please ty again later"
      })
  }
})

export default ProductsSlice.reducer
