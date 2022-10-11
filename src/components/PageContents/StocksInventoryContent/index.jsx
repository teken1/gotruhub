import React from "react";
import { Input, Select } from "../..";

export const StocksInventoryContent = () => (
  <section>
    <div
      style={{ marginBottom: 18 }}
      className="flex align-center pointer hover"
    >
      <img
        src="/images/back-circle.svg"
        style={{ marginRight: 16 }}
        className=""
      />
      <p className="fg-dark1 f20" style={{ fontWeight: "500" }}>
        Go back
      </p>
    </div>
    <section style={{ width: "100%" }}>
      <div className="bg-white" style={{ padding: "40px 32px" }}>
        <h1
          style={{
            marginBottom: 32,
            fontWeight: "700",
            color: "rgba(25, 32, 29, 1)",
          }}
          className="f20 font-std"
        >
          Add New Product
        </h1>
        <form>
          <section style={{ columnGap: 70 }} className="flex">
            <Input />
            <Select />
          </section>
        </form>
      </div>
    </section>
  </section>
);
