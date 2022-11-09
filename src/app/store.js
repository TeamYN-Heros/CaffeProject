import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";
import { cartReducer } from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
