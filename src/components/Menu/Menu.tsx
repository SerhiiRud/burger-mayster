import { TFoodGallery } from "../../types/foodGallery.type";
import { MenuItem } from "../MenuItem/MenuItem";

export const Menu = ({ items }: TFoodGallery) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <MenuItem item={item} />
        </li>
      ))}
    </>
  );
};
