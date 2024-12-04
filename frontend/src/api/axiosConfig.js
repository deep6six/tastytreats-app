import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", // you can use your own ngrok URL for testing
  headers: { "ngrok-skip-browser-warning": "true" },
});

// Check for token in localStorage and attach it to all requests if it exists
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Attach the token to the Authorization header of every request
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);
export default instance;

// to use JWT token for authorization, attach to request header
// const token = localStorage.getItem("token");

// axios.get("http://localhost:8080/protected-endpoint", {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// }).then(response => {
//   console.log("Protected data", response.data);
// }).catch(error => {
//   console.error("Error fetching protected data", error);
// });
