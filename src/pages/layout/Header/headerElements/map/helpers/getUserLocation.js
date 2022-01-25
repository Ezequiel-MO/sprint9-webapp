export const getUserLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (error) => {
        reject(error);
      },
      {
        timeout: 3000,
        enableHighAccuracy: true,
      }
    );
  });
};
