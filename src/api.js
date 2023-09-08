import axios from "axios";

const API_ENDPOINT = "https://howmuchpay.shop";

export const API = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000 * 5, // 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
});
