import React from "react";
import "./Subnav.css";

export function Subnav() {
    return(
  <div className="search-bar">
    <button className="filter-button">Filtros</button>
    <input type="text" placeholder="Buscar..." className="search-input" />
    <button className="search-button">
      <span role="img" aria-label="search-icon">🔍</span>
    </button>
  </div>
    )
};

