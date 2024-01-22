import { TFood } from "./food.type";

export type TCart = {
  cart: TFood[];
  removeFromCart: (id: number) => void;
};
