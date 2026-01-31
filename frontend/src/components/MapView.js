import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { normalRoute, safeRoute } from "../data/Routes";
import { unsafeZones } from "../data/UnSafeZone";

export default function MapView({ mode }) {
  useEffect(() => {
    const map = L.map("map").setView([20.2961, 85.8245], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    if (mode === "normal") {
      L.polyline(normalRoute, { color: "blue", weight: 5 }).addTo(map);
    }

    if (mode === "safe") {
      L.polyline(safeRoute, { color: "green", weight: 5 }).addTo(map);
    }

    if (mode === "unsafe") {
      unsafeZones.forEach((zone) => {
        L.circle(zone, {
          radius: 200,
          color: "red",
          fillOpacity: 0.4,
        }).addTo(map);
      });
    }

    return () => map.remove();
  }, [mode]);

  return <div id="map" className="map-container"></div>;
}
