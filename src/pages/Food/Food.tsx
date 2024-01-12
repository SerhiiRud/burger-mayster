import { Box } from "@chakra-ui/react";
import { Menu } from "../../components/Menu/Menu";
import { food } from "../../utilities/food";

export const Food = () => {
  return (
    <Box h="400px">
      Food page
      <Menu items={food} />
    </Box>
  );
};
