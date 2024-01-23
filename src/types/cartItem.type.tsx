import { TFood } from "./food.type";

export type TCartItem = {
  item: TFood;
  removeFromCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
