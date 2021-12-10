import ReactMapGL from "react-map-gl";
import { useState } from "react";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/oliverm316/ckx0n8rqw24sr15o5vei79sto'
      mapboxApiAccessToken='pk.eyJ1Ijoib2xpdmVybTMxNiIsImEiOiJja3gwbzQ5dWMwdGY5MnFvYmJoZWFqYmg5In0.DHlbmXqmGZjEirgSs29hUA'
      {...viewport}
    ></ReactMapGL>
  );
};

export default Map;
