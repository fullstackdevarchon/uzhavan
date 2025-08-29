// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // ✅ import BrowserRouter
import store from "./redux/store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* ✅ Wrap App in Router */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
