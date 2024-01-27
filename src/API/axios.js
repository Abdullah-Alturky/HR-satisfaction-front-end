import { default as axios } from "axios";
// Base URL for the api
const BASE_URL =
  import.meta.env.VITE_REACT_APP_MODE === "production"
    ? import.meta.env.VITE_REACT_APP_API_URL
    : import.meta.env.VITE_REACT_APP_MOCK_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

export { BASE_URL };
