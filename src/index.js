import React from "react";
import ReactModal from "react-modal";
import AppRouter from "./routes/router";
import Auth from "./components/Auth";
import {store} from "./app/store";
import { Provider } from "react-redux";
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <AppRouter>
      <Auth />
    </AppRouter>
  </Provider>
);
ReactModal.setAppElement("#root");