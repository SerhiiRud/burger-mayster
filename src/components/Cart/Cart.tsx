import { Grid, GridItem } from "@chakra-ui/react";
import { TCart } from "../../types/cart.type";
import { CartItem } from "../CartItem/CartItem";

export const Cart = ({ cart, removeFromCart }: TCart) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      {cart.map((item) => (
        <GridItem key={item.id}>
          <CartItem item={item} removeFromCart={removeFromCart} />
        </GridItem>
      ))}
    </Grid>
  );
};
