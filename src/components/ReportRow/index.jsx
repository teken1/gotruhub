import React from "react";
import { ReportData } from "../ReportData";
import moment from "moment/moment";

export const ReportRow = ({ sn,amount,seller,cname,cdept,cid,orderId,orderedAt,pid,pname,pprice,pqty,punit,payType }) => {
  const date = moment(orderedAt).format("Do, MMM YYYY");
  return (
    <tr>
      <ReportData
        sn={sn}
        cid={cid}
        date={date}
        name={cname}
        department={cdept}
        product={pname}
        quantity={pqty}
        unit={punit}
        uprice={pprice}
        amount={amount}
        action={"View"}
      />
    </tr>
  );
};
