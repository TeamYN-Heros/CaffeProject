import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  favorites: []
};

const Cart = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const itemInFavorites = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (itemInFavorites) {
        itemInFavorites.quantity++;
      } else {
        state.favorites.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.favorites.find(
        (item) => item.id === action.payload
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.favorites.find(
        (item) => item.id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      state.favorites = removeItem;
    },
    removeAllItem: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const cartReducer = Cart.reducer;
export const {
  increment, decrement, incrementByAmount,
  addToFavorites,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAllItem,
} = Cart.actions;