import React, { useState, createContext } from "react";

console.clear();

export const DarkModeContext = createContext();

export default function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  //CSS class:
  const darkModeBackground = darkMode ? "darkMode" : undefined;
  const darkModeBtn = darkMode ? "darkMode__btn" : undefined;
  const darkModeInput = darkMode ? "darkMode__input" : undefined;
  const darkModeDropdown = darkMode ? "darkMode__dropdown" : undefined;
  const darkModeResults = darkMode ? "darkMode__results" : undefined;

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        darkModeBackground,
        darkModeBtn,
        darkModeDropdown,
        darkModeInput,
        darkModeResults
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
