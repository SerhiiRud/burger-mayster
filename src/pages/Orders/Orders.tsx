import { Container, Heading, Text } from "@chakra-ui/react";
import { Cart } from "../../components/Cart/Cart";
import { TCart } from "../../types/cart.type";

export const Orders = ({ cart, removeFromCart }: TCart) => {
  return (
    <Container h="1200px" maxW="1200px">
      <Heading as="h1" mt="20px" mb="40px" textAlign="center" fontSize="24">
        Orders page
      </Heading>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </Container>
  );
};
