import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("authToken"),
  user: null,
};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("authToken", action.payload);
      state.token = action.payload;
    },
    removeToken: (state) => {
      localStorage.removeItem("authToken");

      state.token = null;
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, removeToken, setUser } = authSlice.actions;

export default authSlice.reducer;
