import { useMemo } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Menu } from "../../components/Menu/Menu";
import { TFoodPage } from "../../types/foodPage.type";
import { foodFilter } from "../../utilities/foodFilter";

export const Food = ({ food, setCart }: TFoodPage) => {
  const visibleFood = useMemo(() => foodFilter(food, "food"), [food]);

  return (
    <Box h="1200px">
      <Heading as="h1" mt="20px" mb="20px" textAlign="center" fontSize="24">
        Food page
      </Heading>
      <Menu items={visibleFood} setCart={setCart} />
    </Box>
  );
};
