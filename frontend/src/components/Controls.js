import "./../styles/App.css";

export default function Controls({ setMode }) {
  return (
    <nav className="navbar">
      <div className="logo">🛡️ SafeRoute</div>

      <ul className="nav-links">
        <li onClick={() => setMode("home")}>Home</li>
        <li onClick={() => setMode("normal")}>Normal Route</li>
        <li onClick={() => setMode("safe")}>Safe Route</li>
        <li onClick={() => setMode("unsafe")}>Unsafe Zones</li>
      </ul>
    </nav>
  );
}
