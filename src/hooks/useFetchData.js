import React, { useEffect, useState } from "react";
import config from "../../config";
import api from "../../axiosInstance";

const useFetchData = ({ endpoint }) => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await api.get(endpoint);
        setApiData(response.data);
      } catch (error) {
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [endpoint]);
  return { apiData, isLoading, error };
};

export default useFetchData;
