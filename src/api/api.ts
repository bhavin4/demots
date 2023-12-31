import axios from "axios";
import { Cookies } from "react-cookie";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    // "Content-Type": "*",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    let res = error.response;
    if (res.status === 401) {
      localStorage.removeItem("token"); 
      window.location.href = "/";
    }
  }
);

axiosClient.interceptors.request.use(
  function (request) {
    if (request.url !== "auth/login") {
      const token = localStorage.getItem("token"); 
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default axiosClient;
