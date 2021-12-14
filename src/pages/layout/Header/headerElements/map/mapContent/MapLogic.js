import { useState, useEffect } from "react";
import getCenter from "geolib/es/getCenter";

const MapLogic = (codeMatch) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [coords, setCoords] = useState([]);
  const [viewport, setViewport] = useState({});
  const { hotels, schedule } = codeMatch;

  const getLat = (string) => {
    let stringArr = string?.split(",");
    //if string contains floating point numbers, extract the first one and return it
    if (stringArr[0].match(/[0-9]*\.[0-9]*/)) {
      return parseFloat(stringArr[0].match(/[0-9]*\.[0-9]*/)[0]);
    }
  };

  const getLng = (string) => {
    //convert string to string array
    let stringArr = string.split(",");
    console.log("stringArr", stringArr);
    //if string contains floating point numbers, extract the second one and return it
    if (stringArr[1].match(/[0-9]*\.[0-9]*/)) {
      return parseFloat(stringArr[1].match(/[0-9]*\.[0-9]*/)[0]);
    }
  };

  useEffect(() => {
    hotels.forEach((hotel) => {
      if (hotel.coordinates[0]) {
        setCoords((coords) => [
          ...coords,
          {
            latitude: getLat(hotel.coordinates[0]),
            longitude: getLng(hotel.coordinates[0]),
            name: hotel.name,
          },
        ]);
      }
    });
  }, [hotels]);

  useEffect(() => {
    schedule.forEach((day) => {
      day.morningEvents.forEach((event) => {
        if (event.coordinates[0]) {
          setCoords((coords) => [
            ...coords,
            {
              latitude: getLat(event.coordinates[0]),
              longitude: getLng(event.coordinates[0]),
              name: event.name,
            },
          ]);
        }
      });
    });
    schedule.forEach((day) => {
      day.lunch.forEach((event) => {
        if (event.coordinates[0]) {
          setCoords((coords) => [
            ...coords,
            {
              latitude: getLat(event.coordinates[0]),
              longitude: getLng(event.coordinates[0]),
              name: event.name,
            },
          ]);
        }
      });
    });
    schedule.forEach((day) => {
      day.afternoonEvents.forEach((event) => {
        if (event.coordinates[0]) {
          setCoords((coords) => [
            ...coords,
            {
              latitude: getLat(event.coordinates[0]),
              longitude: getLng(event.coordinates[0]),
              name: event.name,
            },
          ]);
        }
      });
    });
    schedule.forEach((day) => {
      day.dinner.forEach((event) => {
        if (event.coordinates[0]) {
          setCoords((coords) => [
            ...coords,
            {
              latitude: getLat(event.coordinates[0]),
              longitude: getLng(event.coordinates[0]),
              name: event.name,
            },
          ]);
        }
      });
    });
  }, [schedule]);

  useEffect(() => {
    if (coords.length > 0) {
      const centerObj = getCenter(coords);
      setViewport({
        width: "100%",
        height: "100%",
        latitude: centerObj.latitude,
        longitude: centerObj.longitude,
        zoom: 12,
      });
    }
  }, [coords]);

  return {
    selectedLocation,
    setSelectedLocation,
    coords,
    viewport,
    setViewport,
  };
};

export default MapLogic;
