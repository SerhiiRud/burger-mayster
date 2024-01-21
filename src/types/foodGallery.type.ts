import { TFood } from "./food.type";

export type TFoodGallery = {
  items: TFood[];
  setCart: React.Dispatch<React.SetStateAction<TFood[]>>;
};
