import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import reportWebVitals from './reportWebVitals';
import "./index.css";
import { ResultContextProvider } from "./Context/ResultContextProvider";
import { BrowserRouter as Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routes>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </Routes>
);
