import { Outlet } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../Header/Header";

export const Layout = () => {
  const bg = useColorModeValue("#2C2C2C", "#FFFFFF");
  const color = useColorModeValue("#b45f06", "#783f04");
  return (
    <Box bg={bg} color={color}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
