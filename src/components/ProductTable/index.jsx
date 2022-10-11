import { React, useState } from "react";
import { ProductRow } from "../ProductRow";

export const ProductTable = ({ isExpanded }) => {
  const [count, setCount] = useState(1);
  // setCount = count + 1;
  return (
    <section>
      <table>
        <thead>
          <th>S/N</th>
          <th>Product</th>
          <th className={!isExpanded && "hide"}>Category</th>
          <th className={!isExpanded && "hide"}>Manufacturer</th>
          <th>C. Price</th>
          <th>S. Price</th>
          <th>Avail. Qty</th>
          <th className={!isExpanded && "hide"}>Unit of sale</th>
          <th>Qty rem.</th>
          <th className={!isExpanded && "hide"}>Action</th>
        </thead>
        <tbody>
          {[2, 3, 3, 56, 54, 56, 6].map((item, idx) => (

            <ProductRow sn={idx * 1 + 1} isExpanded={isExpanded} />


          ))}
        </tbody>
      </table>

      <section className="nexted">
        <div className="backfront">
          <img src="./images/back.svg"></img>
          <p>{count}</p>
          <img src="./images/front.svg"></img>
        </div>
      </section>
    </section>
  );
};
