import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <Box>
      <Header />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
