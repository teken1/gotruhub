import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Select, Button, ProfileDetail } from "../..";
import { GoBack } from "../../Helpers/GoBack";
export const CustomerProfileContent = () => {
  const navigate = useNavigate();
  return(
  <section>
    <GoBack/>
    <section style={{ width: "100%" }}>
      <div className="bg-white" style={{ padding: "40px 32px" }}>
        <div
          className="flex justify-between align-center"
          style={{
            paddingBottom: 24,
            borderBottom: "1px solid rgba(218, 223, 221, 1)",
          }}
        >
          <h1
            style={{
              fontWeight: "700",
              color: "rgba(25, 32, 29, 1)",
            }}
            className="f20 font-std"
          >
            Emmanuel Joseph’s Profile
          </h1>
          <div className="flex" style={{ columnGap: 15 }}>
            <Button onClick={() => navigate('/customer-report')} title="Customer Records" />
            <Button
              classes="bg-primary1 fg-white resetPasswordButton"
              title="Resend Password"
            />
          </div>
        </div>
        <ProfileDetail />
        <section
          role="profile-details"
          style={{
            marginTop: 46,
            borderBottom: "1px solid rgba(218, 223, 221, 1)",
            paddingBottom: 40,
          }}
        >
          <h2 className="f16 fg-dark1 font-std fw600">Contact Information</h2>
          <div
            style={{
              border: "1px solid rgba(213, 215, 228, 1)",
              padding: "31px 50px",
              marginTop: 32,
            }}
            className="br-8 flex"
          >
            <ul
              className="flex flex-wrap"
              style={{ columnGap: "7vw", rowGap: 24, paddingLeft: 12 }}
            >
              <Li prty="Phone Number" value="0905 898 8785" idx={0} />
              <Li prty="Email address" value="man@gmail.com" />
              <Li prty="Home Address" value="Choba, Port Harcourt" idx={2} />
            </ul>
          </div>
        </section>
      </div>
    </section>
  </section>
  );
};

const Li = ({ prty, value, idx }) => (
  <li
    style={{
      paddingRight: "5vw",
      borderLeft: `1px solid ${
        idx == 0 ? "transparent" : "rgba(213, 215, 228, 1)"
      }`,
      paddingLeft: 24,
    }}
  >
    <h4
      className="f12 fg-dark2"
      style={{
        fontWeight: "400",
        marginBottom: 8,
      }}
    >
      {prty}
    </h4>
    <p className="fg-dark1 fw500 contactAddress">{value}</p>
  </li>
);
