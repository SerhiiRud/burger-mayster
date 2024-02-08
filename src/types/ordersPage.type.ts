import { TFood } from "./food.type";
import { TOrder } from "./orders.type";

export type TOrdersPage = {
  cart: TFood[];
  orders: TOrder[];
  removeFromCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
