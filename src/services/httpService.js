import axios from "axios";

//constants
import endpoints from "../constants/api";

const httpService = axios.create({
  baseURL: endpoints.baseUrl,
});

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    // whatever you want to do with the error
    throw error;
  }
);
export default httpService;
