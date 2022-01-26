import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocaion = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("Map is not ready");
    if (!userLocation) throw new Error("User location is not ready");
    map?.flyTo({
      center: userLocation,
      zoom: 14,
    });
  };
  return (
    <button
      className='btn'
      style={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        zIndex: 999,
        color: "#fff",
        backgroundColor: "#ea5933",
      }}
      onClick={onClick}
    >
      Re-center map
    </button>
  );
};
