import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../utils/instance";

export const login = createAsyncThunk(
  "auth/login",
  async ({ userCredentials }) => {
    try {
      const { data } = await instance.post("/api/login", userCredentials);
      localStorage.setItem("authToken", data.token);
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ userData }) => {
    try {
      const { data } = await instance.post("/api/register", userData);
      localStorage.setItem("authToken", data.token);
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const userLogout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.removeItem("authToken");
  } catch (error) {
    return error.response.data.message;
  }
});

const initialState = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: { initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.user = null;
      state.token = null;
    });
  },
});

export default authSlice.reducer;
