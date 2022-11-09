import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  carts: []
};

const Cart = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCarts: (state, action) => {
      const itemInCarts = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCarts) {
        itemInCarts.quantity++;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.carts.find(
        (item) => item.id === action.payload
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.carts.find(
        (item) => item.id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.carts.filter(
        (item) => item.id !== action.payload
      );
      state.carts = removeItem;
    },
    removeAllItem: (state) => {
      state.carts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const cartReducer = Cart.reducer;
export const {
  addToCarts,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAllItem,
} = Cart.actions;