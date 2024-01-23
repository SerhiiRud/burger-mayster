import { TFood } from "./food.type";

export type TCart = {
  cart: TFood[];
  removeFromCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
