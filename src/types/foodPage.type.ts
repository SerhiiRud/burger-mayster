import { TFood } from "./food.type";

export type TFoodPage = {
  food: TFood[];
  setCart: React.Dispatch<React.SetStateAction<TFood[]>>;
};
