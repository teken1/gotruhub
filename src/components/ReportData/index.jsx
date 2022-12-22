import React, { useState } from "react";
import { ReportModal } from "../modals";

export const ReportData = ({
  sn,
  cid,
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
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  return (
    <>
      <td style={{ width: 20 }}>{sn}</td>
      <td>{date}</td>
      <td>{product}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{"₦" + uprice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      <td>{"₦" + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      <td style={{ position: "relative" }}>
        <ReportModal
          isOpen={reportModalIsOpen}
          closeModal={setReportModalIsOpen}
          cid={cid}
        />
        <button
          className="CTA"
          onClick={() => setReportModalIsOpen(!reportModalIsOpen)}
        >
          {action}
        </button>
      </td>
    </>
  );
};
