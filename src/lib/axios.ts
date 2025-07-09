//this is axios instance

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
  withCredentials: true, //include this if we end up using cookie
});

api.interceptors.request.use(
  (config) => {
    //attach token here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    //for handling global errors
    return Promise.reject(error);
  }
);
