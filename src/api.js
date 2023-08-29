import axios from "axios";

const API_ENDPOINT = "http://43.200.225.232:8080";

export const API = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000 * 5, // 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
});
