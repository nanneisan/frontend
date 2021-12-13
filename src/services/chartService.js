//services
import httpService from "./httpService";

//constants
import endpoints from "../constants/api";

export async function getAll() {
  return await httpService.get(endpoints.Chart + "/");
}

export async function create(data) {
  return await httpService.post(endpoints.Chart + "/", data);
}

export async function getBarChart() {
  return await httpService.get(endpoints.Chart + "/bar");
}

export async function getPieChart() {
  return await httpService.get(endpoints.Chart + "/pie");
}
