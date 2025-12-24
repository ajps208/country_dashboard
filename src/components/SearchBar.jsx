import "../styles.css";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
