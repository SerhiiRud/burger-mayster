import { TFood } from "../../types/food.type";
import { MenuItem } from "../MenuItem/MenuItem";

export const Menu = ({ items }: TFood[]) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <MenuItem data={item} />
        </li>
      ))}
    </>
  );
};
