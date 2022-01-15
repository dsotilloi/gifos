import React, { useContext } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import { DarkModeContext } from "./context/DarkModeContext";
import "./css/styles.css";
import "./css/darkMode.css";
import "./css/responsive.css";

console.clear();

export default function App() {
  const { darkModeBackground } = useContext(DarkModeContext);

  return (
    <div className={`App ${darkModeBackground}`}>
      <div className="principal-container">
        <Header key="header" />
        <Results key="results" />
      </div>
    </div>
  );
}
