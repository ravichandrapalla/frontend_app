import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useFetchData from "../hooks/useFetchData";

const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { apiData, isLoading, error } = useFetchData({
    endpoint: "/getuserInfo",
  });

  console.log("api data ", apiData);
  useEffect(() => {
    if (!isLoading) {
      const isAuthenticated = apiData?.message?.email ? true : false;
      if (!isAuthenticated || error) navigate("/login");
    }
  }, [apiData, isLoading, error]);
  if (isLoading) return <div>Loading ...</div>;
  return children;
};

export default PrivateRoutes;
