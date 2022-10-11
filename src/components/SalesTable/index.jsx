import React from "react";
import { SalesRow } from "../SalesRow";

export const SalesTable = () => {
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
        {[2, 4, 2, 6, 4, 6, 3, 234, 2, 45, 5].map((item, idx) => (
          <SalesRow sn={idx * 1 + 1} />
        ))}
      </tbody>
    </table>
  );
};
