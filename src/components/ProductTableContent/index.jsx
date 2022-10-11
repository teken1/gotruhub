import React from "react";

export const ProductTableContent = ({
  sn,
  product,
  category,
  manufacturer,
  cprice,
  sprice,
  available,
  unit,
  quantity,
  action,
  isExpanded,
}) => {
  return (
    <>
      <td>{sn}</td>
      <td>{product}</td>
      <td className={!isExpanded && "hide"}>{category}</td>
      <td className={!isExpanded && "hide"}>{manufacturer}</td>
      <td>{cprice}</td>
      <td>{sprice}</td>
      <td>{available}</td>
      <td className={!isExpanded && "hide"}>{unit}</td>
      <td>
        <div className="quantify">{quantity}</div>
      </td>
      <td className={!isExpanded && "hide"}>
        <button className="CTA">{action}</button>
      </td>
    </>
  );
};
