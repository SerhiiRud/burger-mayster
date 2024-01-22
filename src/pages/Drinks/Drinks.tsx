import { useMemo } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Menu } from "../../components/Menu/Menu";
import { TFoodPage } from "../../types/foodPage.type";
import { foodFilter } from "../../utilities/foodFilter";

export const Drinks = ({ food, addToCart }: TFoodPage) => {
  const visibleFood = useMemo(() => foodFilter(food, "drink"), [food]);

  return (
    <Box h="1200px">
      <Heading as="h1" mt="20px" mb="20px" textAlign="center" fontSize="24">
        Drinks page
      </Heading>
      <Menu items={visibleFood} addToCart={addToCart} />
    </Box>
  );
};
