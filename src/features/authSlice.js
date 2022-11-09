import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};

const Auth = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export const authReducer = Auth.reducer;
export const { login, logout } = Auth.actions;
