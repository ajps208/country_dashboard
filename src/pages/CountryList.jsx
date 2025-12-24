import { useEffect, useState } from "react";
import { countriesAPI } from "../services/api";
import { fetchWithCache } from "../services/apiCache";
import CountryCard from "../components/CountryCard";
import SkeletonCard from "../components/SkeletonCard";

export default function CountryList({ search = "", region = "" }) {
  // Store all countries
  const [countries, setCountries] = useState([]);

  // Track current page for pagination
  const [page, setPage] = useState(1);

  // Show loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch countries with cache
    fetchWithCache("countries", () =>
      countriesAPI
        .get("/all?fields=name,flags,capital,region,population,cca3")
        .then((res) => res.data)
    )
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Countries API error:", err);
        setLoading(false);
      });
  }, []);

  // Filter by search text
  const filtered = countries
    .filter((c) =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    )
    // Filter by region
    .filter((c) => (region ? c.region === region : true));

  // Show 10 countries per page
  const paginated = filtered.slice(0, page * 10);

  return (
    <>
      <div className="grid">
        {/* Show skeleton while loading */}
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : paginated.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
      </div>

      {/* Load more button */}
      {!loading && paginated.length < filtered.length && (
        <button onClick={() => setPage((p) => p + 1)}>
          Load More
        </button>
      )}
    </>
  );
}
