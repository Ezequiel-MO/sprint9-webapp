import { useState, useEffect } from "react";
import axios from "axios";

export const useAxiosFetch = (dataURL) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzY2MTg0MTIsImV4cCI6MTYzNjcwNDgxMn0.d4C6gz77bVhnf7uRoF0b6kalLWOgb6upY_qBimWAOyI",
          },
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    fetchData(dataURL);

    const cleanUp = () => {
      console.log("clean up function");
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [dataURL]);

  return { data, fetchError, isLoading };
};
