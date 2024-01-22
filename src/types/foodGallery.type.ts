import { TFood } from "./food.type";

export type TFoodGallery = {
  items: TFood[];
  addToCart: (item: TFood) => void;
};
