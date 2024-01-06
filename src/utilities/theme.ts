import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  mainText: "#FBD38D",
};

const theme = extendTheme({ config, colors });

export default theme;
