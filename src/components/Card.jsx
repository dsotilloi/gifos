import React from "react";
import "../css/styles.css";
import "../css/darkMode.css";
import "../css/responsive.css";

console.clear();

export default function Card({ imgSrc }) {
  return (
    <div className="card">
    <a href={imgSrc} target="_blanck">
      <img className="card__gif" src={imgSrc} alt="gif" />
    </a>
    </div>
  );
}
