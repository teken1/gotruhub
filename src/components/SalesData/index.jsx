import { Link } from "react-router-dom";
import React, { useState } from "react";
import { SalesMore } from "../SalesMore";

export const SalesData = ({
  sn,
  date,
  name,
  department,
  product,
  quantity,
  unit,
  uprice,
  amount,
  action,
}) => {
  const [salesMoreIsOpen, setSalesMoreIsOpen] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  return (
    <>
      <td style={{ width: 20 }}>{sn}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{product}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{uprice}</td>
      <td>{amount}</td>
      <td style={{ position: "relative" }}>
        <SalesMore
          isOpen={salesMoreIsOpen}
          isSuspended={isSuspended}
          setIsSuspended={setIsSuspended}
        />
        <button
          className="CTA"
          onClick={() => setSalesMoreIsOpen(!salesMoreIsOpen)}
        >
          {action}
        </button>
      </td>
    </>
  );
};
