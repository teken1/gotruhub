import React, { useState } from "react";
import { ProductSalesRecord, OutOfStock } from "../..";
import { Switch } from "@mui/material";
import SplineChart from "../../Charts/Spline Chart";

export const DashboardContent = () => {
  const [isDeskMode, setIsDeskMode] = useState(false);
  return (
    <div>
      <div
        className="flex justify-between align-center"
        style={{ marginBottom: 30, marginTop: 40 }}
      >
        <h1 className="f32 fg-grey1 fw700"> Welcome back, Bright</h1>
        <div>
          <span className="fg-grey1">Desk mode</span>
          <Switch
            size="string"
            checked={isDeskMode}
            onChange={() => setIsDeskMode(!isDeskMode)}
          />
        </div>
      </div>
      <section style={{ marginBottom: 48 }}>
        <ul className="grid3">
          {[
            {
              qty: "1,234,545,443",
              unit: "NGN",
              title: "TOTAL INCOME",
              img: "income-chart.svg",
            },
            {
              qty: "456",
              unit: "Items",
              title: "ITEMS IN STOCK",
              img: "items-chart.svg",
            },
            {
              qty: "123",
              unit: "Customers",
              title: "NUMBER OF CUSTUMERS",
              img: "customers-chart.svg",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="bg-grey1 relative"
              style={{ padding: "48px 32px" }}
            >
              <div style={{ marginBottom: 12 }}>
                <span className="fg-white fw700 f18" style={{ marginRight: 5 }}>
                  {item.qty}
                </span>
                <span className="fg-white f12">{item.unit}</span>
              </div>
              <div>
                <span className="fg-white f14">{item.title}</span>
              </div>
              <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "rgba(64, 145, 108, 0.1)",
                  borderRadius: "100px 0 0 0",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
                className="center"
              >
                <img
                  src={"/images/" + item.img}
                  style={{ marginTop: 13, marginLeft: 13 }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: 16 }} className="bg-white">
        <SplineChart />
      </section>
      <div className="flex" style={{ columnGap: 16 }}>
        <ProductSalesRecord flex={0.6} />
        <OutOfStock flex={0.4} />
      </div>
    </div>
  );
};
