import API_CONFIG from "./api";
import { CONFIG_NAME } from "@/utils/constants";


const api = new API_CONFIG();
let token = localStorage.getItem(CONFIG_NAME.ACCESS_TOKEN);
if (token) {
  api.setToken(token)
}
export default api;