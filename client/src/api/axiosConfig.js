import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const user = localStorage.getItem("productr-user");
  if (user) {
    config.headers["x-user-id"] = JSON.parse(user).id;
  }
  return config;
});

export default axiosClient;