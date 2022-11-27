import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/style.css";
import { AuthProvider } from "./contexts/AuthContext";
import { UserInfoProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <UserInfoProvider>
      <App />
    </UserInfoProvider>
  </AuthProvider>
);
