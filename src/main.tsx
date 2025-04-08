import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FloorProvider } from "./contexts/FloorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FloorProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FloorProvider>
  </React.StrictMode>
);
