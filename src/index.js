import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import AppRouter from "./routes/router";
import Auth from "./components/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppRouter>
    <Auth />
  </AppRouter>
);
ReactModal.setAppElement("#root");
