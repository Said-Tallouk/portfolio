// src/components/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Par défaut "dark" si rien n'est sauvegardé
    const savedTheme = localStorage.getItem("theme");
    console.log("Theme initialisé:", savedTheme || "dark"); // Debug
    return savedTheme || "dark";
  });

  useEffect(() => {
    console.log("Theme changé en:", theme); // Debug
    
    // Applique la classe sur le HTML principal
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    // Sauvegarde dans localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const selectTheme = (selectedTheme) => {
    console.log("selectTheme appelé avec:", selectedTheme); // Debug
    setTheme(selectedTheme);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Calculer isDark pour compatibilité
  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, isDark, selectTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
``