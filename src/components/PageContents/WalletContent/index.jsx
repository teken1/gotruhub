import React, { useState } from "react";
import { Button, Input } from "../..";

export const WalletContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section>
      <CompanyDetails />
    </section>
  );
};

const CompanyDetails = () => {
  return (
    <>
      <section className="bg-white" style={{ padding: 24 }}>
        <header className="relative">
          <img src="/images/settings-header.svg" style={{ width: "100%" }} />
        </header>
        <div
          style={{
            padding: "0 75px",
            height: 300,
            transform: "translateY(-70px)",
          }}
        >
          <div
            className="bg-white center flex-col"
            style={{ padding: "60px 10px" }}
          >
            <h1 className="f24 fw700 fg-grey2">Company’s Wallet</h1>
            <div style={{ marginTop: 57 }}>
              <p>
                <span className="f48 fw700 fg-grey1">0.00</span>
                <small className="f12">NGN</small>
              </p>
            </div>
            <div className="flex" style={{ marginTop: 50, columnGap: 16 }}>
              <Button
                title="Fund Wallet"
                btnStyles={{ padding: "17px 27px", fontSize: 16 }}
                classes="bg-grey1 fg-white br-4"
              />
              <Button
                title="Withdraw"
                btnStyles={{ padding: "17px 34px", fontSize: 16 }}
                classes="br-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
