import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, handleSignup } from "../thunk";

const initialState = {
  auth: [],
  status: "idle",
  error: "",
  notify: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetNotify: (state) => {
        state.notify = false;
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        state.status = "loading";
        state.error = "nil";
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.auth = "User logged in successfully";
        state.error = "nil";
        state.notify = true;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload === "Firebase: Error (auth/wrong-password).") {
          state.error = "Email or Password not correct";
        } else if (
          (action.payload = "Firebase: Error (auth/user-not-found).")
        ) {
          state.error = "User does not exist, try creating an account";
        }else{
          state.error = "Unable to sign up, Please try again later";
        }
      })

      .addCase(handleSignup.pending, (state) => {
        state.status = "loading";
        state.error = "nil";
      })
      .addCase(handleSignup.fulfilled, (state, action) => {
        state.status = "success";
        state.auth = "User logged in successfully";
        state.error = "nil";
        state.notify = true;
      })
      .addCase(handleSignup.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Unable to sign up, Please try again later";
      });
  },
});

export const { resetNotify } = AuthSlice.actions;
export default AuthSlice.reducer;
