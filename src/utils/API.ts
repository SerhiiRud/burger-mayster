import axios from "axios";
export const BASE_URL = "https://65a5445752f07a8b4a3ebe6b.mockapi.io";

export const fetchAPI = async () => {
  const data = await axios.get(`${BASE_URL}/burger-mayster`);
  return data;
};
