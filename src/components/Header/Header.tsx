import { chakra, Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <chakra.header bg="red.100" w="1480px">
      <Container maxW="1440px" bg="blue.100">
        Header
      </Container>
    </chakra.header>
  );
};
