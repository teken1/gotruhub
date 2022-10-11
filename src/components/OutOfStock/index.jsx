import React, { useState, useEffect } from "react";
import { getProtectedData } from "../../utils/services/getServices";

export const OutOfStock = ({ flex }) => {
  const [products, setproducts] = useState([]);
  useState(() => {
    const token = localStorage.getItem("token");
    async function getData() {
      const data = await getProtectedData("/products", {}, token);
      setproducts(data.products);
    }
    getData();
  }, []);

  return (
    <section className="bg-white" style={{ flex }}>
      <h2 style={{ padding: "40px 32px" }} className="f20 fw700 fg-grey1">
        Out Of Stock
      </h2>
      <table style={{ width: "100%" }}>
        <thead
          style={{ padding: "15px 32px", textAlign: "left" }}
          className="bg-dark6"
        >
          <th style={{ padding: "15px 32px" }} className="f14 fg-grey1 fw500">
            S/N
          </th>
          <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
            product
          </th>
          <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
            Rem.
          </th>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={product._id}>
              <td
                style={{
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 32,
                }}
                className="fg-grey1"
              >
                {idx * 1 + 1}
              </td>
              <td
                style={{
                  paddingTop: 12,

                  paddingBottom: 12,
                }}
                className="fg-grey1"
              >
                {product.name}
              </td>
              <td
                style={{
                  paddingTop: 12,

                  paddingBottom: 12,
                }}
                className="fg-grey1"
              >
                {product.availableQty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
