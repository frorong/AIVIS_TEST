import axios from "axios";

import { getCookie } from "@/utils";

import { authUrl } from "@/libs";

export const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url === authUrl.loginUrl()) {
      return config;
    }

    const token = getCookie("token");

    if (!token) {
      location.href = "/auth/login";
    }

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  async (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    /** success request */
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    if (error.response.status === 401) {
      location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
);
