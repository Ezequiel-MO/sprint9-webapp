import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import { Icon } from "@iconify/react";

const Map = () => {
  const coords = [
    { latitude: 41.368679, longitude: 2.189983 },
    { latitude: 41.394591, longitude: 2.157261 },
    { latitude: 41.389121, longitude: 2.162645 },
  ];
  const center = getCenter(coords);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/oliverm316/ckx0n8rqw24sr15o5vei79sto'
      mapboxApiAccessToken='pk.eyJ1Ijoib2xpdmVybTMxNiIsImEiOiJja3gwbzQ5dWMwdGY5MnFvYmJoZWFqYmg5In0.DHlbmXqmGZjEirgSs29hUA'
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {coords.map((coord) => (
        <div key={coord.latitude}>
          <Marker
            latitude={coord.latitude}
            longitude={coord.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Icon icon='bx:bx-hotel' color='#ea5933' width='40' />
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
