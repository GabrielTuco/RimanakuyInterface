import axios from "axios";

const API_URL = "https://rimanakuyapi.onrender.com";

export const azureApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
