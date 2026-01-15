import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api',
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