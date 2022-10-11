import { React, useState } from "react";
import { SalesData } from "../SalesData";

export const SalesRow = ({ sn }) => {
  const [moreIsOpen, setMoreIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const changeMoreState = () => {
    setMoreIsOpen(!editIsOpen);
    console.log("PRecious");
  };
  return (
    <tr>
      <SalesData
        sn={sn}
        date={"12, Jun 2011"}
        name={"Emeka Julius Favour"}
        department={"Deparment one"}
        product={"Bournvita chocolate"}
        quantity={900}
        unit={"Sachet"}
        uprice={"₦ 23,999.00"}
        amount={"₦ 123,999.00"}
        action={"More"}
      />
    </tr>
  );
};
