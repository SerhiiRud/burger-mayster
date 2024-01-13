import { Container, Image } from "@chakra-ui/react";
import { TMenuItem } from "../../types/menuItem.type";

export const MenuItem = ({ item }: TMenuItem) => {
  return (
    <Container
      w="500px"
      h="500px"
      display="flex"
      flexDirection="column"
      boxShadow="xl"
      p="6"
      rounded="md"
    >
      <Image
        src="../../images/png/tasty-beef-burger-png-medium.jpg"
        alt="hamburger"
        mb="30px"
      ></Image>
      <p>{item.name}</p>
      <p>{item.ingredients}</p>
      <p>${item.price}</p>
    </Container>
  );
};
