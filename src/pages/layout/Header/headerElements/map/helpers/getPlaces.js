export const reversedCoords = (coords) => {
  const reversedCoords = coords.map((coord) => {
    const splitCoord = coord.split(",");
    const coordsArr = [
      parseFloat(splitCoord[1].match(/\d+/g).join(".")),
      parseFloat(splitCoord[0].match(/\d+/g).join(".")),
    ];
    return coordsArr;
  });
  return reversedCoords.flat();
};

export const getSchedulePlaces = (arr, arrKey) => {
  const places = arr.map((day) =>
    day[arrKey]
      .map((event) => {
        return {
          name: event.name,
          coords: reversedCoords(event.coordinates),
        };
      })
      .flat()
  );
  return places;
};

export const getHotelPlaces = (arr) => {
  const hotelPlaces = arr.map((hotel) => {
    return {
      name: hotel.name,
      coords: reversedCoords(hotel.coordinates),
    };
  });
  return hotelPlaces;
};
