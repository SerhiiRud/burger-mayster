import { TFood } from "./food.type";

export type TMenuItem = {
  item: TFood;
  addToCart: (item: TFood) => void;
};
