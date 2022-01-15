import React, { useState, createContext } from "react";

console.clear();

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [autocomplete, setAutocomplete] = useState(true);
  const [gifsArray, setGifsArray] = useState([]);
  const [isTrend, setIsTrend] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [tagsArray, setTagsArray] = useState([]);

  return (
    <AppContext.Provider
      value={{
        autocomplete,
        gifsArray,
        isTrend,
        loading,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
