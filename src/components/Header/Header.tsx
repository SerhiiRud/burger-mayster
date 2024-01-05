import {
  chakra,
  Box,
  Image,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";
import { Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <chakra.header border="1px dotted red" w="1920" p="10px 30px 10px 30px">
      <Container
        maxW="1920px"
        bg="white"
        m="0 auto"
        display="flex"
        gap="20"
        alignItems="center"
      >
        <ChakraLink
          as={ReactRouterLink}
          to="/home"
          display="flex"
          gap="5"
          alignItems="center"
          _hover={{ transform: "translate(0px, -2px)" }}
        >
          <Image
            src="../../images/png/hamburger-85x64.png"
            alt="hamburger"
          ></Image>
          <Text
            fontFamily="Satisfy"
            fontSize={48}
            color="#7b3d22"
            textShadow="2px 2px rgba(0, 0, 0, 0.1)"
          >
            Burger Mayster
          </Text>
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/food"
          fontSize={32}
          fontWeight={700}
          color="#7b3d22"
          textShadow="2px 2px rgba(0, 0, 0, 0.1)"
          _hover={{ transform: "translate(0px, -2px)" }}
        >
          Food
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/drinks"
          fontSize={32}
          fontWeight={700}
          color="#7b3d22"
          textShadow="2px 2px rgba(0, 0, 0, 0.1)"
          _hover={{ transform: "translate(0px, -2px)" }}
        >
          Drinks
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/about"
          fontSize={32}
          fontWeight={700}
          color="#7b3d22"
          textShadow="2px 2px rgba(0, 0, 0, 0.1)"
          _hover={{ transform: "translate(0px, -2px)" }}
        >
          About
        </ChakraLink>
        <ColorModeSwitcher ml={400} />
      </Container>
    </chakra.header>
  );
};
