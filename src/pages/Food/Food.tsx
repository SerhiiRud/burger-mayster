import { useMemo } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Menu } from "../../components/Menu/Menu";
import { TFoodPage } from "../../types/foodPage.type";
import { foodFilter } from "../../utils/foodFilter";

export const Food = ({ food, addToCart }: TFoodPage) => {
  const visibleFood = useMemo(() => foodFilter(food, "food"), [food]);

  return (
    <Box h="1200px">
      <Heading as="h1" mt="20px" mb="20px" textAlign="center" fontSize="24">
        Food page
      </Heading>
      <Menu items={visibleFood} addToCart={addToCart} />
    </Box>
  );
};
