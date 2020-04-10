import axios from "axios";
import { getJwt } from "./authService";

var url = "http://localhost:4000/api";
axios.defaults.baseURL = url;

axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json; charset=UTF-8" }
});

axios.defaults.headers.common["x-auth-token"] = getJwt();

// Add a response interceptor
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Loggin the error", error);
    alert("An unexpected error occurred");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
