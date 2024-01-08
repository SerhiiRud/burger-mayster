import { TFood } from "../../types/food.type";

export const MenuItem = (data: TFood) => {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.ingredients}</p>
      <p>Price: ${data.price}</p>
    </>
  );
};
