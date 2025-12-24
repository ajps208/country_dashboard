import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countriesAPI, weatherAPI, WEATHER_API_KEY } from "../services/api";
import "../styles.css";

export default function CountryDetails() {
  // Get country code from URL
  const { code } = useParams();

  // Store country details
  const [country, setCountry] = useState(null);

  // Store weather details
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch country details
    countriesAPI.get(`/alpha/${code}`).then((res) => {
      const data = res.data[0];
      setCountry(data);

      // Fetch weather using capital city
      if (data.capital?.[0]) {
        weatherAPI
          .get(
            `/weather?q=${data.capital[0]}&appid=${WEATHER_API_KEY}&units=metric`
          )
          .then((res) => setWeather(res.data))
          .catch(() => setWeather(null));
      }
    });
  }, [code]);

  // Show loading while data is fetching
  if (!country) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }

  return (
    <div className="details">
      {/* Flag and country info */}
      <div className="details-header">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="details-flag"
        />

        <div className="details-info">
          <h2>{country.name.common}</h2>
          <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p>
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Weather details */}
      {weather && (
        <div className="weather-card">
          <h3>🌤 Weather in {country.capital?.[0]}</h3>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p>
            <strong>Condition:</strong>{" "}
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}
