import { TFood } from "./food.type";

export type TCart = {
  setCart: React.Dispatch<React.SetStateAction<TFood[]>>;
  cart: TFood[];
};
