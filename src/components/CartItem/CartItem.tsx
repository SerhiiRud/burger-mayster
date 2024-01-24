import { Container, Image, Button } from "@chakra-ui/react";
import { TCartItem } from "../../types/cartItem.type";

export const CartItem = ({ item, removeFromCart }: TCartItem) => {
  return (
    <Container
      w="500px"
      h="200px"
      display="flex"
      gap="30"
      boxShadow="xl"
      p="6"
      rounded="md"
    >
      {item.category === "food" ? (
        <Image
          src="../../images/png/tasty-beef-burger-png-medium.jpg"
          alt="hamburger"
          w="20%"
          h="20%"
        ></Image>
      ) : (
        <Image
          src="../../images/png/bottle.jpg"
          alt="hamburger"
          w="20%"
          h="20%"
        ></Image>
      )}
      <p>Price, ${item.price}</p>
      <Button
        colorScheme="orange"
        id={item.id.toString()}
        onClick={removeFromCart}
      >
        Remove
      </Button>
    </Container>
  );
};
