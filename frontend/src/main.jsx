import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

createRoot(document.getElementById("root")).render(
  <AuthProvider store={store}>
    <App />
  </AuthProvider>
);