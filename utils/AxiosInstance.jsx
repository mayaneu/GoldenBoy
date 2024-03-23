import axios from "axios";

// When using phone
const axiosConfig = {
  baseURL: "http://localhost:3000/",
  url: "http://localhost:3000/",
};

// When using PC (postman, web, etc)
// const axiosConfig = {
//   baseURL: "http://localhost:3000/",
//   url: "http://localhost:3000/",
// };

const AxiosInstance = axios.create(axiosConfig);

export default AxiosInstance;