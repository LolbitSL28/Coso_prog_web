import { useSelector } from "react-redux";
import axios from "axios";

const api = axios.create({
  baseURL: "http://38.22.229.186:2121",
});
api.interceptors.request.use((config) => {
  const { token } = useSelector((state) => state.auth);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default api;
