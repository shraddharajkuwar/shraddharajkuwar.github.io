import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import React from "react";

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);