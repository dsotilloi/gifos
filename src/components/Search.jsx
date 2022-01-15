import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { getSearch } from "../resources/fetch/getSearch";
import { getSuggestions } from "../resources/fetch/getSuggestions";
import { getTrends } from "../resources/fetch/getTrends";
import searchIcon from "../resources/images/search-icon.svg";
import "../css/styles.css";
import "../css/darkMode.css";
import "../css/responsive.css";

console.clear();

export default function Search() {
  //Contexts:
  const {
    autocomplete,
    searchButton,
    searchInput,
    setAutocomplete,
    setGifsArray,
    setIsTrend,
    setLoading,
    setSearchButton,
    setSearchInput,
    setTagsArray,
    tagsArray
  } = useContext(AppContext);
  const { darkModeDropdown, darkModeInput } = useContext(DarkModeContext);

  //API requests:
  useEffect(() => {
    searchInput === "" && getTrends(searchInput).then(setGifsArray);
    autocomplete && getSuggestions(searchInput).then(setTagsArray);

    if (searchButton) {
      setLoading(true);
      getSearch(searchInput).then(setGifsArray);
      setSearchButton(!searchButton);
      setLoading(false);
      setIsTrend(false);
    }
  }, [
    autocomplete,
    searchButton,
    searchInput,
    setGifsArray,
    setIsTrend,
    setLoading,
    setSearchButton,
    setTagsArray
  ]);

  return (
    <section className="search">
      <div className="search-position">
        <input
          className={`search__input ${darkModeInput}`}
          value={searchInput}
          onChange={(e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
            setAutocomplete(true);
          }}
          type="text"
          placeholder="Buscar gifs"
        />

        {searchInput !== "" && (
          <ul className={`search__dropdown ${darkModeDropdown}`}>
            {tagsArray.map((tag) => (
              <li
                key={tag.name}
                onClick={(e) => {
                  setSearchInput(e.target.innerText);
                  setAutocomplete(false);
                  setTagsArray([]);
                }}
              >
                {tag.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="btn search__btn"
        value={searchButton}
        onClick={(e) => {
          e.preventDefault();
          if (searchInput !== "") {
            setSearchButton(!searchButton);
            setAutocomplete(false);
            setTagsArray([]);
          }
        }}
      >
        <img src={searchIcon} alt="search icon" />
      </button>
    </section>
  );
}
