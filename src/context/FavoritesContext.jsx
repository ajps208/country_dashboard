import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // Store favorite countries
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  // Save favorites to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add or remove a country from favorites
  const toggleFavorite = (country) => {
    setFavorites((prev) =>
      prev.some((item) => item.cca3 === country.cca3)
        ? prev.filter((item) => item.cca3 !== country.cca3)
        : [...prev, country]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
