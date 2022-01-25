import { useReducer } from "react";
import { MapContext } from "./MapContext";
import { INITIAL_STATE, mapReducer } from "./mapReducer";
import { Marker, Popup } from "mapbox-gl";

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map) => {
    const myLocationPopUp = new Popup().setHTML(`<h4>Aqui estoy</h4>
      <p>en algún lugar del mundo</p>`);
    new Marker({
      color: "#ea5933",
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopUp)
      .addTo(map);
    dispatch({ type: "setMap", payload: map });
  };
  return (
    <MapContext.Provider value={{ ...state, setMap }}>
      {children}
    </MapContext.Provider>
  );
};
