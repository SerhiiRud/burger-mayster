import axios from "axios";
export const BASE_URL = "https://burger-mayster-backend.onrender.com";

export const fetchAPI = async () => {
  const data = await axios.get(`${BASE_URL}/api/burgers`);
  return data;
};
