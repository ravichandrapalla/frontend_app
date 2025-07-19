import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.apiBaseUrl(), // backend url
  withCredentials: true, //to send refresh token as cookie
});

//response interseptor

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isLoginOrRefresh =
      originalRequest.url.includes("/login") ||
      originalRequest.url.includes("/refresh-token");
    if (
      error.response?.status === 403 &&
      !originalRequest._retry &&
      !isLoginOrRefresh
    ) {
      originalRequest._retry = true;
      try {
        await api.post("/refresh-token");
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
