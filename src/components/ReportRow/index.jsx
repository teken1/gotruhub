import React from "react";
import { ReportData } from "../ReportData";

export const ReportRow = ({ sn }) => {
  return (
    <tr>
      <ReportData
        sn={sn}
        date={"12, Jun 2011"}
        product={"Bournvita chocolate"}
        quantity={900}
        unit={"Sachet"}
        uprice={"₦ 23,999.00"}
        Tamount={"₦ 23,999.00"}
        action={"View"}
      />
    </tr>
  );
};
