import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/products`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data?.error || "Something went wrong");
    }
  }
);
