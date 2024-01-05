import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import { ColorModeSwitcher } from "./ColorModeSwitcher/ColorModeSwitcher";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Food } from "../pages/Food/Food";
import { Drinks } from "../pages/Drinks/Drinks";
import { About } from "../pages/About/About";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="food" element={<Food />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
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
