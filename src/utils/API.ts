import axios from "axios";
export const BASE_URL = "https://burger-mayster-backend.onrender.com";

export const fetchApi = async (base: string) => {
  const data = await axios.get(`${BASE_URL}/api/${base}`);
  return data;
};

export const addOrder = async (order: string[]) => {
  const response = await axios.post(`${BASE_URL}/api/orders`, order);
  return response.data;
};
