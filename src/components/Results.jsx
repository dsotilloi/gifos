import React, { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../context/AppContext";
import { DarkModeContext } from "../context/DarkModeContext";
import upIcon from "../resources/images/up-arrow.svg";
import "../css/styles.css";
import "../css/darkMode.css";
import "../css/responsive.css";

console.clear();

export default function Results() {
  const { gifsArray, loading, searchInput } = useContext(AppContext);
  const { darkModeResults } = useContext(DarkModeContext);

  return (
    <main className={`results ${darkModeResults}`}>
      {loading && <p className="error-message">Loading...</p>}

      <div className="results__card-container">
        {gifsArray.map((gif) => (
          <Card key={gif.id} imgSrc={gif.images.original.url} />
        ))}
      </div>

      {searchInput !== "" && gifsArray.length === 0 && (
        <p className="error-message">
          ¡Ups! No hay resultados, <span>¡sigue intentando!</span>
        </p>
      )}

      <a href="#">
        <button className="btn results__btn">
          <img src={upIcon} alt="Go to Search" />
        </button>
      </a>
    </main>
  );
}
