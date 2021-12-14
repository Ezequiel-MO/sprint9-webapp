import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Icon } from "@iconify/react";
import MapLogic from "./MapLogic";
import InfoMarker from "./InfoMarker";

const Map = ({ codeMatch }) => {
  const {
    selectedLocation,
    setSelectedLocation,
    coords,
    viewport,
    setViewport,
  } = MapLogic(codeMatch);

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/oliverm316/ckx0n8rqw24sr15o5vei79sto'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {coords?.map((coord, index) => (
        <div key={`${coord.latitude}-${index}`}>
          <Marker
            latitude={coord.latitude}
            longitude={coord.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p onClick={() => setSelectedLocation(coord)}>
              <Icon icon={coord.icon} color='#ea5933' width='40' />
            </p>
          </Marker>

          {selectedLocation.name === coord.name && (
            <Popup
              latitude={coord.latitude}
              longitude={coord.longitude}
              closeButton={true}
              onClose={() => setSelectedLocation({})}
              anchor='bottom'
              offsetTop={15}
            >
              <InfoMarker selectedLocation={selectedLocation} />
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
