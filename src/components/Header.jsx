import React, { useEffect, useContext } from "react";
import Search from "./Search";
import { AppContext } from "../context/AppContext";
import { DarkModeContext } from "../context/DarkModeContext";
import darkModeLogo from "../resources/images/logoDarkMode.svg";
import heroImg from "../resources/images/hero-img.svg";
import logo from "../resources/images/logo.svg";
import "../css/styles.css";
import "../css/darkMode.css";
import "../css/responsive.css";

console.clear();

export default function Header() {
  const { isTrend, setIsTrend, searchInput } = useContext(AppContext);
  const { darkMode, setDarkMode, darkModeBtn } = useContext(DarkModeContext);

  useEffect(() => {
    if (searchInput === "") {
      setIsTrend(true);
    }
  }, [searchInput, setIsTrend]);

  return (
    <header className="header">
      <div className="header__inicio">
        <a href="/">
          {darkMode ? (
            <img src={darkModeLogo} alt="Gifos logo" />
          ) : (
            <img src={logo} alt="Gifos logo" />
          )}
        </a>

        <button
          className={`btn ${darkModeBtn}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Modo diurno" : "Modo nocturno"}
        </button>
      </div>

      <div className="header__hero">
        <h1 className="header__hero--h1">
          ¡Inspírate y busca los mejores GIFS!
        </h1>
        <img className="header__hero--img" src={heroImg} alt="hero" />
      </div>

      <Search key="search" />

      {isTrend ? (
        <p className="header__p">
          O descubre tu favorito en nuestras tendencias:
        </p>
      ) : (
        <p className="header__p">Resultados de tu búsqueda:</p>
      )}
    </header>
  );
}
