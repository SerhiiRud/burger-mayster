import { TFood } from "../types/food.type";

export const storedCart = () => {
  const storedCart: TFood[] | [] = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "{}")
    : [];
  return storedCart;
};
