import React from "react";

export const DeskData = ({
  sn,
  category,
  product,
  available,
  selling,
  quantity,
  action,
  steps,
}) => {
  return (
    <>
      <td>{sn}</td>
      <td>{category}</td>
      <td>{product}</td>
      <td>{available}</td>
      <td>{selling}</td>
      <td>
        <div className="deskborder">
          <input type="number" value={quantity} step={steps}/>
        </div>
      </td>
      <td>
        <div className="greenadd">
          <img src="../images/greenadd.svg" />
          {action}
        </div>
      </td>
    </>
  );
};
