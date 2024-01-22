import { Grid, GridItem } from "@chakra-ui/react";
import { TFoodGallery } from "../../types/foodGallery.type";
import { MenuItem } from "../MenuItem/MenuItem";

export const Menu = ({ items, addToCart }: TFoodGallery) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      {items.map((item) => (
        <GridItem key={item.id}>
          <MenuItem item={item} addToCart={addToCart} />
        </GridItem>
      ))}
    </Grid>
  );
};
