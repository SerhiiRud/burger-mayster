import { useMemo } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { TCart } from "../../types/cart.type";
import { CartItem } from "../CartItem/CartItem";

export const Cart = ({ cart, removeFromCart }: TCart) => {
  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }, [cart]);

  return (
    <Grid templateColumns="repeat(1, 2fr)" gap={3}>
      {cart.map((item) => (
        <GridItem key={item._id}>
          <CartItem item={item} removeFromCart={removeFromCart} />
        </GridItem>
      ))}
      <div>{cartTotal}</div>
    </Grid>
  );
};
