import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utilities/theme";
import { Loader } from "./Loader/Loader";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Food } from "../pages/Food/Food";
import { Drinks } from "../pages/Drinks/Drinks";
import { About } from "../pages/About/About";
import { fetchAPI } from "../utilities/API";
import { TFood } from "../types/food.type";

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [foodDrinks, setFoodDrinks] = React.useState<TFood[]>([]);

  const ERROR_MSG = "Error happend";

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchAPI();
        console.log(res);

        setFoodDrinks(res.data);
      } catch (error) {
        if (error instanceof Error) setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Suspense fallback={<Loader />}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="food" element={<Food food={foodDrinks} />} />
            <Route path="drinks" element={<Drinks />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </React.Suspense>
  );
};
