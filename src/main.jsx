import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
