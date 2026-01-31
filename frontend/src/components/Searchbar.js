import "../styles/App.css";

export default function SearchBar({ setSource, setDestination }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter source location"
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter destination"
        onChange={(e) => setDestination(e.target.value)}
      />
    </div>
  );
}
