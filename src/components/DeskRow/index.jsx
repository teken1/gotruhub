import React from "react";
import { DeskData } from "../DeskData";

export const DeskRow = ({ sn }) => {
  return (
    <tr>
      <DeskData
        sn={sn}
        category={"Chocolate"}
        product={"Chocolate"}
        available={126}
        selling={"N 123,098.00"}
        quantity={0}
        action={"Add to cart"}
      />
    </tr>
  );
};
