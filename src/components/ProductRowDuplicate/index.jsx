import React from "react";
import { ProductTableContentDuplicate } from "../ProductTableContentDuplicate";

export const ProductRowDuplicate = () => {
  return (
    <tr>
      <ProductTableContentDuplicate
        sn={"1"}
        product={"Chocolate"}
        category={"Beverage"}
        manufacturer={"Bournvita"}
        cprice={"₦ 123,999.00"}
        sprice={"₦ 123,999.00"}
        available={"900"}
      />
    </tr>
  );
};
