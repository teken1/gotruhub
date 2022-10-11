import React, { useState } from "react";
import { Button, Input, HardwareIntegration, RulesAndPermission } from "../..";
import { useSearchParams } from "react-router-dom";

export const SettingsContent = ({ location }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({ hi: "yj" });

  const [activeTab, setActiveTab] = useState(0);
  let content;
  if (activeTab == 0) content = <PersonalDetails />;
  else if (activeTab == 1) content = <CompanyDetails />;
  else if (activeTab == 2) content = <HardwareIntegration />;
  else if (activeTab == 3) content = <RulesAndPermission />;
  return (
    <section>
      <nav>
        <ul className="flex" style={{ columnGap: 40 }}>
          {[
            { tab: "Personal Details" },
            { tab: "Company Details" },
            { tab: "Hardware Integration" },
            { tab: "Roles & Permission" },
          ].map((tab, idx) => (
            <li
              onClick={() => setActiveTab(idx)}
              className={`hover pointer f16 fg-grey4 ${
                activeTab == idx ? "fw500" : "fw400"
              }`}
              style={{
                padding: "5px 5px 20px 0px",
                borderBottom: `2px solid ${
                  activeTab == idx ? "rgba(64, 145, 108, 1)" : "transparent"
                }`,
                color:
                  activeTab == idx
                    ? "rgba(64, 145, 108, 1)"
                    : "rgba(111, 121, 117, 1)",
              }}
            >
              {tab.tab}
            </li>
          ))}
        </ul>
      </nav>
      {content}
    </section>
  );
};

const PersonalDetails = () => {
  return (
    <>
      <section className="bg-white" style={{ padding: 24 }}>
        <header className="relative">
          <img src="/images/settings-header.svg" style={{ width: "100%" }} />
          <div
            className="bg-white"
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: "absolute",
              bottom: -75,
              left: "10%",
            }}
          >
            <img src="/images/avatar.svg" style={{ width: "100%" }} />
          </div>
        </header>
        <section style={{ marginTop: 50, padding: 71 }}>
          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="First Name" title="First Name" />
            <Input placeholder="Last Name" title="Last Name" />
          </div>

          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="brightbright@gmail.com" title="Email Address" />
            <Input placeholder="090 998 9898" title="Phone number" />
          </div>
          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="Select date" title="Date of Birth" />
            <Input placeholder="Select Gender" title="Gender" />
          </div>
          <div className="flex justify-end" style={{ marginTop: 25 }}>
            <Button
              title="Save Details"
              btnStyles={{ padding: "17px 55px" }}
              classes="fg-white bg-grey1 br-4"
            />
          </div>
        </section>
      </section>
      <section style={{ marginTop: 24, padding: 32 }} className="bg-white">
        <header
          style={{
            paddingBottom: 21,
            borderBottom: "1px solid rgba(219, 226, 223, 1)",
            marginBottom: 34,
          }}
        >
          <h2 className="fw500 f16 fg-grey1">Change Password</h2>
        </header>
        <div style={{ padding: "10px 63px" }}>
          <div className="flex justify-between" style={{}}>
            <Input
              placeholder="First Name"
              title="Old Password"
              containerStyle={{ flex: 0.485 }}
            />
            <Input
              placeholder="Last Name"
              title="New Password"
              containerStyle={{ flex: 0.485 }}
            />
          </div>

          <div className="flex" style={{ columnGap: 29 }}>
            <Input
              containerStyle={{ flex: 0.485 }}
              placeholder="brightbright@gmail.com"
              title="Confirm New Password"
            />
          </div>
          <div className="flex justify-end" style={{ marginTop: 40 }}>
            <Button
              title="Save Details"
              btnStyles={{ padding: "17px 55px" }}
              classes="fg-white bg-grey1 br-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};
const CompanyDetails = () => {
  return (
    <>
      <section className="bg-white" style={{ padding: 24 }}>
        <header className="relative">
          <img src="/images/settings-header.svg" style={{ width: "100%" }} />
          <div
            className="bg-white"
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: "absolute",
              bottom: -75,
              left: "10%",
            }}
          >
            <img src="/images/avatar.svg" style={{ width: "100%" }} />
          </div>
        </header>
        <section style={{ marginTop: 50, padding: 71 }}>
          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="Company Name" title="Company Name" />
            <Input placeholder="brightbright@gmail.com" title="Email Address" />
          </div>

          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="090 998 9898" title="Phone number" />
            <Input placeholder="Enter address" title="Office Address" />
          </div>
          <div className="flex" style={{}}>
            <Input
              placeholder="www.company.com"
              title="Company website"
              containerStyle={{ flex: 0.485 }}
            />
          </div>
          <div className="flex justify-end" style={{ marginTop: 25 }}>
            <Button
              title="Save Details"
              btnStyles={{ padding: "17px 55px" }}
              classes="fg-white bg-grey1 br-4"
            />
          </div>
        </section>
      </section>
    </>
  );
};
