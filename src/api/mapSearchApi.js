import axios from "axios";

const mapSearchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "en",
    access_token: process.env.REACT_APP_MAPBOX_TOKEN,
  },
});

export default mapSearchApi;