export const INITIAL_STATE = {
  isMapReady: false,
  map: undefined,
  markers: [],
};

export const mapReducer = (state, action) => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };
    case "setMarkers":
      return {
        ...state,
        markers: action.payload,
      };
    default:
      return state;
  }
};
