import { useEffect, useReducer } from "react";
import { mapSearchApi } from "../../../../../../../api";
import { PlacesContext } from "./PlacesContext";
import { initialState, placesReducer } from "./placesReducer";

export const PlacesProvider = ({ children, codeMatch }) => {
  const [state, dispatch] = useReducer(placesReducer, initialState);

  useEffect(() => {
    /* getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    ); */
    const latLng = JSON.parse(codeMatch.hotels[0].coordinates[0]);
    const lngLat = [JSON.parse(latLng[1]), JSON.parse(latLng[0])];
    dispatch({ type: "setUserLocation", payload: lngLat });
    // eslint-disable-next-line
  }, []);

  const searchPlacesByTerm = async (query) => {
    if (query.length === 0) {
      dispatch({ type: "setPlaces", payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error("No user location");
    dispatch({ type: "setLoadingPlaces" });
    const resp = await mapSearchApi.get(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    });
    dispatch({ type: "setPlaces", payload: resp.data.features });
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
