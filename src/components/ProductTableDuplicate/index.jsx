import { React, useState } from "react";

import { ProductRowDuplicate } from "../ProductRowDuplicate";

export const ProductTableDuplicate = () => {
  const [count, setCount] = useState(1);
  // setCount = count + 1;
  return (
    <section>
      <table>
        <thead>
          <th>S/N</th>
          <th>Product</th>
          <th>Category</th>
          <th>Manufacturer</th>
          <th>C. Price</th>
          <th>S. Price</th>
          <th>Avail. Qty</th>
        </thead>
        <tbody>
          {[2, 3, 3, 56, 54, 56, 6].map((item, idx) => (
            <ProductRowDuplicate sn={idx * 1 + 1} />
          ))}
        </tbody>
      </table>

      <section className="next">
        <div className="backfront">
          <img src="./images/back.svg"></img>
          <p>{count}</p>
          <img src="./images/front.svg"></img>
        </div>
      </section>
    </section>
  );
};
