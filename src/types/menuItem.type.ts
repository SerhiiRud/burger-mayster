import { TFood } from "./food.type";

export type TMenuItem = {
  item: TFood;
  setCart: React.Dispatch<React.SetStateAction<TFood>>;
};
