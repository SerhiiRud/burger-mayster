import { Container, Image, Button } from "@chakra-ui/react";
import { TMenuItem } from "../../types/menuItem.type";

export const MenuItem = ({ item, setCart }: TMenuItem) => {
  const cartHandler = () => {
    setCart(item);
  };
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
      {item.category === "food" ? (
        <Image
          src="../../images/png/tasty-beef-burger-png-medium.jpg"
          alt="hamburger"
          mb="30px"
        ></Image>
      ) : (
        <Image
          src="../../images/png/bottle.jpg"
          alt="hamburger"
          mb="30px"
        ></Image>
      )}
      <p>{item.name}</p>
      <p>Ingredients: {item.ingredients.join(", ")}</p>
      <p>Price, ${item.price}</p>
      <Button colorScheme="orange" onClick={cartHandler}>
        Button
      </Button>
    </Container>
  );
};
