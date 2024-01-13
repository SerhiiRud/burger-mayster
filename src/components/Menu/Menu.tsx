import { List, Grid, GridItem } from "@chakra-ui/react";
import { TFoodGallery } from "../../types/foodGallery.type";
import { MenuItem } from "../MenuItem/MenuItem";

export const Menu = ({ items }: TFoodGallery) => {
  return (
    // <List display="flex" gap="20">
    //   {items.map((item) => (
    //     <li key={item.id}>
    //       <MenuItem item={item} />
    //     </li>
    //   ))}
    // </List>
    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      {items.map((item) => (
        <GridItem key={item.id}>
          <MenuItem item={item} />
        </GridItem>
      ))}
    </Grid>
  );
};
