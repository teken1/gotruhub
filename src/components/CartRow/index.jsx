import React from "react";
import { CartData } from "../CartData";

export const CartRow = () => {
  return (
    <tr>
      <CartData product={"Chocolate"} quantity={1} selling={"N 123,098.00"} />
    </tr>
  );
};
