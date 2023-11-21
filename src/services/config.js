import axios from "axios";

const API_URL = "https://traductoquechua-phslq.eastus2.inference.ml.azure.com";

export const azureApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer em8Kc4gQ3K9tDjcSkhrdPVtE1Z4Ulven",
  },
});
