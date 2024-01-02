import { chakra, Box, Image, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <chakra.header border="1px dotted red" w="1920" p="10px 30px 10px 30px">
      <Container maxW="1920px" bg="white" m="0 auto">
        <chakra.a href="/" display="flex" gap="5" alignItems="center">
          <Image
            src="../../images/png/hamburger-85x64.png"
            alt="hamburger"
          ></Image>
          <Text fontFamily="Satisfy" fontSize={32} color="#7b3d22">
            Burger Mayster
          </Text>
        </chakra.a>
      </Container>
    </chakra.header>
  );
};
