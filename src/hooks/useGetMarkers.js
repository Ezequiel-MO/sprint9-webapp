import {
  getHotelPlaces,
  getSchedulePlaces,
} from "../pages/layout/Header/headerElements/map/helpers/getPlaces";

const useGetMarkers = (codeMatch) => {
  const morningEventsPlaces = getSchedulePlaces(
    codeMatch.schedule,
    "morningEvents"
  );
  const lunchPlaces = getSchedulePlaces(codeMatch.schedule, "lunch");
  const afternoonEventsPlaces = getSchedulePlaces(
    codeMatch.schedule,
    "afternoonEvents"
  );
  const dinnerPlaces = getSchedulePlaces(codeMatch.schedule, "dinner");
  const hotelPlaces = getHotelPlaces(codeMatch.hotels);
  const allPlaces = [
    ...morningEventsPlaces,
    ...lunchPlaces,
    ...afternoonEventsPlaces,
    ...dinnerPlaces,
    ...hotelPlaces,
  ];
  return { allPlaces };
};

export default useGetMarkers;
