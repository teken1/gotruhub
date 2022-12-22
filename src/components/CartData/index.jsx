import React from "react";

export const CartData = ({ product, quantity, selling, action }) => {
  return (
    <>
      <td>{product}</td>
      <td>
        <div className="cartsales">{quantity}</div>
      </td>
      <td>{selling}</td>
      <td>
        <div style={{cursor:"pointer"}} className="cartActions">
          <img src="./images/bad.svg" />
        </div>
      </td>
    </>
  );
};
