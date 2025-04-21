import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FloorProvider } from "./contexts/FloorContext.tsx";
import VideoFrame from "pages/VideoFrame.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FloorProvider>
      <BrowserRouter>
        <div className="h-screen flex flex-col">
          <div className="h-[50vh]">
            <VideoFrame />
          </div>
          <div className="h-[50vh] overflow-auto">
            <App />
          </div>
        </div>
      </BrowserRouter>
    </FloorProvider>
  </React.StrictMode>
);
