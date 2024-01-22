import { TFood } from "./food.type";

export type TFoodPage = {
  food: TFood[];
  addToCart: (item: TFood) => void;
};
