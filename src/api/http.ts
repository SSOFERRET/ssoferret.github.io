import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getToken } from "../store/authStore";

const BASE_URL =
  "http://CleanUp-env-2.eba-div83prf.ap-northeast-2.elasticbeanstalk.com:5000";

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
    },
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        try {
          config.headers.authorization = `Bearer ${token}`;
        } catch (e) {
          console.error("Failed to parse token:", e);
        }
      }

      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
