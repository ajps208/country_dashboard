import { createContext, useContext, useEffect, useState } from "react";

// Create theme context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Store current theme (light or dark)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme and save it
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Switch between light and dark
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    // Provide theme values to all components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
