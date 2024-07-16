import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
