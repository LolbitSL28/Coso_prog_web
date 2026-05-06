import { useSelector } from "react-redux";
import axios from "axios";
import { getStore } from "./storeHelp";

const api = axios.create({
  baseURL: "http://38.22.229.186:2121",
});
api.interceptors.request.use((config) => {
  const store = getStore();
  const token = store.getState().auth?.token;
  if (token && token !== "null" && token !== "undefined")
    config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default api;
