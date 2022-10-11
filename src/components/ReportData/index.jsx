import React, { useState } from "react";
import { ReportModal } from "../modals";

export const ReportData = ({
  sn,
  date,
  product,
  quantity,
  unit,
  uprice,
  Tamount,
  action,
}) => {
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  return (
    <>
      <td>{sn}</td>
      <td>{date}</td>
      <td>{product}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{uprice}</td>
      <td>{Tamount}</td>
      <td>
        <ReportModal
          isOpen={reportModalIsOpen}
          closeModal={setReportModalIsOpen}
        />
        <button
          className="CTA"
          onClick={() => {
            setReportModalIsOpen(!reportModalIsOpen);
          }}
        >
          {action}
        </button>
      </td>
    </>
  );
};
