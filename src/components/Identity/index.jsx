import React from "react";
import { Link } from "react-router-dom";

export const Identity = ({
  sn,
  names,
  remark,
  depart,
  contact,
  view,
  percent,
}) => {
  return (
    <>
      <td>{sn}</td>
      <td>{names}</td>

      <td>{percent}</td>
      <td>{remark}</td>
      <td>{depart}</td>
      <td>{contact}</td>
      <td className="table-view">
        <Link to="/attendance-history" className="br-4">
          {view}
        </Link>
      </td>
    </>
  );
};
