import React from "react";
import ReactDOM from "react-dom";
import DarkModeProvider from "./context/DarkModeContext";
import AppProvider from "./context/AppContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </AppProvider>
  </React.StrictMode>,
  rootElement
);
