import { TFood } from "../types/food.type";
export const foodFilter = (food: TFood[], category: string) => {
  const res = food.filter((item) => item.name === category);
  return res;
};
