import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/products`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.error || "Something went wrong"
      );
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  "getAllProductsByCategory",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/products/category/smartphones`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.error || "Something went wrong"
      );
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/products/category-list`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.error || "Something went wrong"
      );
    }
  }
);

export const handleLogin = createAsyncThunk(
  "handleLogin",
  async ({ data }, thunkAPI) => {
    const { email, password } = data?.data;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const handleSignup = createAsyncThunk(
  "handleSignup",
  async ({ data }, thunkAPI) => {
    const { email, password } = data?.data;

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
