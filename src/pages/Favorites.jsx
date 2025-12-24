import { useFavorites } from "../context/FavoritesContext";
import CountryCard from "../components/CountryCard";
import "../styles.css";

export default function Favorites() {
  // Get favorite countries
  const { favorites } = useFavorites();

  // Show message if no favorites
  if (favorites.length === 0) {
    return (
      <div className="empty-state">
        <h2>⭐ No Favorites Yet</h2>
        <p>Start adding countries to your favorites</p>
      </div>
    );
  }

  return (
    // Show favorite countries
    <div className="grid">
      {favorites.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}
