import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import "../styles.css";

export default function CountryCard({ country }) {
  // Get favorites data and function
  const { toggleFavorite, favorites } = useFavorites();

  // Check if this country is already a favorite
  const isFavorite = favorites.some(
    (item) => item.cca3 === country.cca3
  );

  return (
    <div className="card">
      {/* Country flag */}
      <img
        src={country.flags.png}
        alt={country.name.common}
      />

      {/* Country name */}
      <h3>{country.name.common}</h3>

      {/* Country details */}
      <p>Capital: {country.capital?.[0]}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>

      <div className="actions">
        {/* Go to details page */}
        <Link to={`/country/${country.cca3}`}>View</Link>

        {/* Add or remove from favorites */}
        <button onClick={() => toggleFavorite(country)}>
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}
