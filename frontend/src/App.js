import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/Searchbar";
import MapView from "./components/MapView";
import "./styles/App.css";

function App() {
  const [mode, setMode] = useState("normal");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <>
      <Navbar setMode={setMode} />
      <SearchBar setSource={setSource} setDestination={setDestination} />
      <MapView mode={mode} />
      <Footer />
    </>
  );
}

export default App;
