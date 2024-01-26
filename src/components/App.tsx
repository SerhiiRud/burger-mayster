import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";
import { Loader } from "./Loader/Loader";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Food } from "../pages/Food/Food";
import { Drinks } from "../pages/Drinks/Drinks";
import { Orders } from "../pages/Orders/Orders";
import { About } from "../pages/About/About";
import { fetchAPI } from "../utils/API";
import { TFood } from "../types/food.type";
import { storedCart } from "../utils/storedCart";

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [foodDrinks, setFoodDrinks] = React.useState<TFood[]>([]);
  const [cart, setCart] = React.useState<TFood[]>(storedCart);

  const ERROR_MSG = "Error happend";

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchAPI();
        setFoodDrinks(res.data);
      } catch (error) {
        if (error instanceof Error) setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: TFood) => {
    const isInCart = cart.find((el) => el.id === item.id);
    if (isInCart) return;
    setCart([...cart, item]);
  };

  const removeFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <React.Suspense fallback={<Loader />}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="food"
              element={<Food food={foodDrinks} addToCart={addToCart} />}
            />
            <Route
              path="drinks"
              element={<Drinks food={foodDrinks} addToCart={addToCart} />}
            />
            <Route
              path="orders"
              element={<Orders cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </React.Suspense>
  );
};
