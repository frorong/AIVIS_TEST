import axios from "axios";

// import { authUrl, get, patch } from "@/libs";

export const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error) => Promise.reject(error)
);
