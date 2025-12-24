import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";
import Favorites from "./pages/Favorites";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import "./styles.css";

// Top navigation bar
function Navbar({ search, setSearch, region, setRegion }) {
  // Theme toggle function
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      {/* Left side links */}
      <div className="nav-left">
        <Link to="/" className="logo">
          🌍 Countries
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>

      {/* Search and filter */}
      <div className="nav-center">
        <SearchBar value={search} onChange={setSearch} />
        <Filters region={region} setRegion={setRegion} />
      </div>

      {/* Theme toggle button */}
      <div className="theme-icon" onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </div>
    </nav>
  );
}

export default function App() {
  // Search text
  const [search, setSearch] = useState("");

  // Selected region
  const [region, setRegion] = useState("");

  return (
    // Theme context
    <ThemeProvider>
      {/* Favorites context */}
      <FavoritesProvider>
        {/* Router */}
        <BrowserRouter>
          <Navbar
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
          />

          {/* App routes */}
          <Routes>
            <Route
              path="/"
              element={<CountryList search={search} region={region} />}
            />
            <Route path="/country/:code" element={<CountryDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
