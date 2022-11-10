import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import { authReducer } from "../features/authSlice";
// import userReducer from "../features/login/userSlice";
// import modalReducer from "../features/modal/modalSlice";
// import storage from "redux-persist/lib/storage";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   cartReducer
// );

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer,
    // modal: modalReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});
// export const persistor = persistStore(store);
