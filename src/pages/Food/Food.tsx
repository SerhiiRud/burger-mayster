import { Box, Heading } from "@chakra-ui/react";
import { Menu } from "../../components/Menu/Menu";
//import { food } from "../../utilities/food";
import { TFoodPage } from "../../types/foodPage.type";

export const Food = ({ food }: TFoodPage) => {
  return (
    <Box h="1200px">
      <Heading as="h1" mt="20px" mb="20px" textAlign="center" fontSize="24">
        Food page
      </Heading>
      <Menu items={food} />
    </Box>
  );
};
