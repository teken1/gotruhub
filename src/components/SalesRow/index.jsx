import { React, useEffect, useState } from "react";
import { SalesData } from "../SalesData";
import moment from "moment/moment";
import toast, { Toaster } from "react-hot-toast";

export const SalesRow = ({ sn,amount,seller,cname,cdept,cid,orderId,orderedAt,pid,pname,pprice,pqty,punit,payType }) => {
  const [moreIsOpen, setMoreIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [usersData,setUsersData] = useState("");
  const [user, setUser] = useState("");
  const changeMoreState = () => {
    setMoreIsOpen(!editIsOpen);
    console.log("PRecious");
  };
  const notify = (message) => toast(message);
  const date = moment(orderedAt).format("Do, MMM YYYY");
  return (
    <>
    <Toaster/>
    <tr>
      <SalesData
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
        action={"More"}
      />
    </tr>
    </>
  );
};
