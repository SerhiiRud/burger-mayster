import { Grid, GridItem } from "@chakra-ui/react";
import { TCart } from "../../types/cart.type";
import { CartItem } from "../CartItem/CartItem";

export const Cart = ({ cart, removeFromCart }: TCart) => {
  return (
    {cart.map((item) => (
        <GridItem key={item.id}>
          <CartItem item={item} />
        </GridItem>
      ))}
  );
};
