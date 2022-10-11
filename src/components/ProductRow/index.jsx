import React from "react";
import { ProductTableContent } from "../ProductTableContent";


export const ProductRow = ({ isExpanded,sn }) => {

  return (
    <tr>
      <ProductTableContent
        sn={sn}
        product={"Chocolate"}
        category={"Beverage"}
        manufacturer={"Bournvita"}
        cprice={"₦ 123,999.00"}
        sprice={"₦ 123,999.00"}
        available={"900"}
        unit={"Sachet"}
        quantity={"900"}
        action={"view"}
        isExpanded={isExpanded}
      />
    </tr>
  );
};
