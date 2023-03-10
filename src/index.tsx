import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElem = document.querySelector("#root") as HTMLElement;
const root = ReactDOM.createRoot(rootElem);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
