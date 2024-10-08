import axios from "axios";

let baseUrl;
if (process.env.NODE_ENV === "production") {
  baseUrl = process.env.VUE_APP_SERVER || "https://rumahgerak.com/api";
} else {
  baseUrl = process.env.BASE_URL + "api";
}

const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
  },
  withCredentials: true,
});

export default api;
