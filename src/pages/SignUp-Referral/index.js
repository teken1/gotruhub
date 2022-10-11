import React, { useState } from "react";
import { Button, FlexRow, Input } from "../../components";
import { ManageAttendance, ManageStore } from "../../components/Home_";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
export const SignUpReferral = () => {
  return (
    <main
      style={{
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh"
      }}
    >
      <LandingHeader />
      <div className="center">
        <div style={{ maxWidth: 330, width: "100%", paddingBottom: 90 }}>
          <h1
            style={{
              color: "#19201D",

              fontSize: 24,

              fontWeight: "700",

              marginBottom: 40,
              textAlign: "center"
            }}
          >
            Referral code
          </h1>
          <div>
            <Input
              containerStyle={{ flex: 1 }}
              title="Address"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #D5D7E4"
              }}
              labelStyle={{ fontSize: 12, color: "#19201D" }}
            />
            <FlexRow>
              <Button style={{ flex: 1, padding: 14 }} title="Skip" />
              <Button
                style={{
                  flex: 1,
                  padding: 14,
                  backgroundColor: "#19201D",
                  color: "#fff"
                }}
                title="Register"
              />
            </FlexRow>
          </div>
        </div>
      </div>
    </main>
  );
};
