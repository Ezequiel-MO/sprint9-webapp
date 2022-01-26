import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens";

/* if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
  throw new Error("Geolocation is not supported by your browser");
} */

export const MapsApp = ({ codeMatch }) => {
  return (
    <PlacesProvider codeMatch={codeMatch}>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
