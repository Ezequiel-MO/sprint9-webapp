import { Paper } from "@mui/material";
import { useContext, useLayoutEffect, useRef } from "react";
import { MapContext, PlacesContext } from "../context";
import { Loading } from "./loading/Loading";
import mapboxgl from "mapbox-gl";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef(null);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Paper ref={mapDiv} elevation={0} style={{ height: "90vh" }}>
      <h1>{userLocation?.join(",")}</h1>
    </Paper>
  );
};
