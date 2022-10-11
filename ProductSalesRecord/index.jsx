import React, { useEffect, useState } from "react";
import { getProtectedData } from "../../utils/services/getServices";

export const ProductSalesRecord = ({ flex }) => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getData() {
      const data = await getProtectedData("/products", {}, token);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <section className="bg-white" style={{ flex }}>
      <div
        style={{ padding: "40px 32px" }}
        className="flex justify-between align-center"
      >
        <h2 className="f20 fw700 fg-grey1">Product Sales Record</h2>
        <div>
          <span className="f14 fg-grey1">Sort:</span>
          <select
            style={{ border: "none", marginLeft: 5, display: "inline-block" }}
          >
            <option className="f14 fg-grey1">Bottom to Top</option>
            <option className="f14 fg-grey1">Bottom to Top</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: products.length === 0 ? "block" : "none",

          width: "100%",
          // border: "3px solid red",
          padding: 40,
        }}
        className="center"
      >
        <p className="f20" style={{ textAlign: "center" }}>
          There are no items
        </p>
      </div>
      <table
        style={{
          width: "100%",
          display: products.length === 0 ? "none" : "initial",
        }}
      >
        <thead
          style={{ padding: "15px 32px", textAlign: "left" }}
          className="bg-dark6"
        >
          <th style={{ padding: "15px 32px" }} className="f14 fg-grey1 fw500">
            S/N
          </th>
          <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
            Product
          </th>
          <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
            Total Sales
          </th>

          <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
            {" "}
            Income.
          </th>
        </thead>
        <tbody>
          {products.map((row, idx) => (
            <tr key={idx}>
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
                Chocolate
              </td>
              <td
                style={{
                  paddingTop: 12,

                  paddingBottom: 12,
                }}
                className="fg-grey1"
              >
                200
              </td>
              <td
                style={{
                  paddingTop: 12,

                  paddingBottom: 12,
                }}
                className="fg-grey1"
              >
                N 123,098,09.00
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
