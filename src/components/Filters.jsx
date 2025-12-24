import "../styles.css";

export default function Filters({ region, setRegion }) {
  return (
    <select
      className="filter-select"
      value={region}
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="">All Regions</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
