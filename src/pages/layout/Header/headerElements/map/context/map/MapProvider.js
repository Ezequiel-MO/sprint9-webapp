import { useReducer, useContext } from "react";
import { MapContext } from "./MapContext";
import { INITIAL_STATE, mapReducer } from "./mapReducer";
import { LngLatBounds, Marker, Popup } from "mapbox-gl";
import { PlacesContext } from "../";
import { useEffect } from "react";
import { mapDirectionsApi } from "../../../../../../../api";

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext);

  useEffect(() => {
    state.markers.forEach((marker) => marker.remove());
    const newMarkers = [];
    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup({ offset: 25 }).setHTML(
        `<h6>${place.text_en}</h6><p>${place.place_name_en}</p>`
      );

      const newMarker = new Marker()
        .setPopup(popup)
        .setLngLat([lng, lat])
        .addTo(state?.map);

      newMarkers.push(newMarker);
    }

    dispatch({ type: "setMarkers", payload: newMarkers });
    // eslint-disable-next-line
  }, [places]);

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

  const getRouteBetweenPoints = async (start, end) => {
    const response = await mapDirectionsApi.get(
      `/${start.join(",")};${end.join(",")}`
    );
    const {
      distance,
      duration,
      geometry: { coordinates: coords },
    } = response.data.routes[0];

    let kms = distance / 1000;
    kms = Math.round(kms * 100);
    kms /= 100;
    const durationInMinutes = Math.floor(duration / 60);
    console.log({ kms, durationInMinutes, coords });

    const bounds = new LngLatBounds(start, start);

    for (const coord of coords) {
      bounds.extend(coord);
    }

    state.map?.fitBounds(bounds, { padding: 50 });

    const sourceData = {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coords,
            },
          },
        ],
      },
    };

    if (state.map?.getLayer("RouteString")) {
      state.map.removeLayer("RouteString");
      state.map.removeSource("RouteString");
    }

    state.map?.addSource("RouteString", sourceData);
    state.map?.addLayer({
      id: "RouteString",
      type: "line",
      source: "RouteString",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ea5933",
        "line-width": 3,
      },
    });
  };

  return (
    <MapContext.Provider value={{ ...state, setMap, getRouteBetweenPoints }}>
      {children}
    </MapContext.Provider>
  );
};
