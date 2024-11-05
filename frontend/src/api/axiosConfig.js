import axios from "axios";

export default axios.create({
  baseURL: "", //use your own ngrok url for testing, we will deploy the application later using fly.io
  headers: { "ngrok-skip-browser-warning": "true" },
});
