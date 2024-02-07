import axios from "axios";

import { getCookie, deleteCookie } from "../utils/cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

// Request
api.interceptors.request.use(
  (req) => {
    const accessToken = getCookie("accessToken");

    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response
api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (error.response.status === 401) {
      deleteCookie();
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
