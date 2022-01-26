export const getSchedulePlaces = (arr, arrKey) => {
  const places = arr.map((day) =>
    day[arrKey]
      .map((event) => {
        return {
          name: event.name,
          coords: event.coordinates,
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
      coords: hotel.coordinates,
    };
  });
  return hotelPlaces;
};
