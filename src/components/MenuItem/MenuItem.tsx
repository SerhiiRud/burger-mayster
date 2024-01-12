import { TMenuItem } from "../../types/menuItem.type";

export const MenuItem = ({ item }: TMenuItem) => {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.ingredients}</p>
      <p>${item.price}</p>
    </>
  );
};
