import React, {useEffect, useState} from "react";
import { SalesRow } from "../SalesRow";
import toast, { Toaster } from "react-hot-toast";

export const SalesTable = ({isExpanded, searchValue}) => {
  const [salesData, setSalesData] = useState([]);

  const notify = (message) => toast(message);

  const token = localStorage.getItem("token");
  const domagent = localStorage.getItem("agent");
  const domain = JSON.parse(domagent).domain;
  const myHeaders = new Headers();
    myHeaders.append("domain", domain);
    myHeaders.append("AUTHORIZATION", "Bearer "+token);

    const getSalesList = async () => {
    
      const resp = await fetch(
        "https://gotruhubapi.herokuapp.com/api/v1/sales",
        {
          method: "GET",
          headers: myHeaders,
          redirect: 'follow',
        }
      );
      const data = await resp.json();
      if (data.error) {
        notify(data.error.message);
        return;
      }
      const myData = JSON.stringify(data?.data);
      console.log(data);
      console.log(myData);
      return myData;
    }
    useEffect(() => {
      ( 
        async function rendersales() {
        const lists = await getSalesList();
        const dataLists = JSON.parse(lists);
        if (searchValue === "" || searchValue === null || searchValue === undefined) {
          setSalesData(dataLists);
        } else {
          const arrayLists = dataLists.filter(searchOutput => {
            return (searchOutput.name.includes(searchValue)
            || searchOutput.category.includes(searchValue)
            || searchOutput.manufacturer.includes(searchValue)
            );
          });
          setSalesData(arrayLists);
        }
      }
      )();
    
    }, 
    
    [salesData]);
  return (
    <table>
      <thead className="headsales">
        <th>S/N</th>
        <th>Date</th>
        <th>Name of user</th>
        <th>Class/Department</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Unit </th>
        <th>Unit price</th>
        <th>T. Amount</th>
        <th>Action</th>
      </thead>
      <tbody>
        {salesData.map((item, idx) => {
          const _id = item._id;
          const amount = item.amount;
          const confirmedBy = item.confirmedBy;
          const member = item.member;
          const memberId = item.memberId;
          const memberDept = item.memberDept;
          const orderId = item.orderId;
          const pid = item.product.pid;
          const price = item.product.price;
          const qty = item.product.qty;
          const unit = item.product.unit;
          const pname = item.product.name;
          const orderedAt = item.orderedAt;
          const updatedAt = item.updatedAt;
          const paymentMethod = item.paymentMethod;
          const state = item.state;
          const totalQty = item.totalQty;
        return(
          <SalesRow 
          sn={idx * 1 + 1} 
          sales_id={_id}
          amount={amount}
          seller={confirmedBy}
          cname={member}
          cid={memberId}
          cdept={memberDept}
          orderId={orderId}
          pid={pid}
          pname={pname}
          pprice={price}
          pqty={qty}
          punit={unit}
          orderedAt={orderedAt}
          updatedAt={updatedAt}
          payType={paymentMethod}
          state={state}
          totalQty={totalQty}
          
          />
        )
      }
        )}
      </tbody>
    </table>
  );
};
