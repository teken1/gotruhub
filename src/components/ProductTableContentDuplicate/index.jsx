import React from "react";

export const ProductTableContentDuplicate = ({
  sn,
  product,
  category,
  manufacturer,
  cprice,
  sprice,
  available,
}) => {
  return (
    <>
      <td>{sn}</td>
      <td>{product}</td>
      <td>{category}</td>
      <td>{manufacturer}</td>
      <td>{cprice}</td>
      <td>{sprice}</td>
      <td>{available}</td>
    </>
  );
};
