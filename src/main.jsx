import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/configureStore.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={1500} hideProgressBar={true} />
      <App />
    </Provider>
  </StrictMode>
);
