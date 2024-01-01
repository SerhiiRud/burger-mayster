import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Header } from "./Header/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    {/* <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <text>test</text>
        </VStack>
      </Grid>
    </Box> */}
  </ChakraProvider>
);
