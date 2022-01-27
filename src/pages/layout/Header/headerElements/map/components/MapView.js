import { Paper } from "@mui/material";
import { useContext, useLayoutEffect, useRef } from "react";
import { MapContext, PlacesContext } from "../context";
import { Loading } from "./loading/Loading";
import mapboxgl from "mapbox-gl";
import useGetMarkers from "../../../../../../hooks/useGetMarkers";

export const MapView = ({ codeMatch }) => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef(null);
  const { allPlaces } = useGetMarkers(codeMatch);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      map.addControl(new mapboxgl.FullscreenControl());
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(new mapboxgl.GeolocateControl());

      let allFlatPlaces = allPlaces.flat();

      allFlatPlaces.forEach((place) => {
        if (place.coords.length > 0) {
          new mapboxgl.Marker().setLngLat(place.coords).addTo(map);
        }
      });
      console.log("all places", allFlatPlaces);
      setMap(map);
    }
    // eslint-disable-next-line
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return <Paper ref={mapDiv} elevation={0} style={{ height: "90vh" }}></Paper>;
};
