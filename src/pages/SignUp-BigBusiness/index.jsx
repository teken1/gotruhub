import React, { useRef, useState } from "react";
import { Button, FlexRow, Input, Select } from "../../components";
import {
  ManageAttendance,
  ManageStore,
  RegistrationTitle
} from "../../components/Home_";

import { LandingHeader } from "../../components/Landing";
import { Box, Typography } from "@mui/material";
export const SignUpBigBiz = () => {
  const [cacImage, setCacImage] = useState(null);
  const [opLicenceImage, setOpLicenceImage] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const [othersType, setOthersType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [yearOfEstablishment, setYearOfEstablishment] = useState("");
  const [nameOfProprietor, setNameOfProprietor] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const docs = [cacImage, opLicenceImage];

  const cacImageRef = useRef();
  const opLicenceImageRef = useRef();

  const uploadCac = () => {
    cacImageRef?.current?.click();
  };
  const uploadOpLicence = () => {
    opLicenceImageRef?.current?.click();
  };
  const handleImageChange = (image, kind) => {
    if (image[0]) {
      if (kind == "cac") {
        setCacImage(image[0]);
      } else {
        setOpLicenceImage(image[0]);
      }
    }
  };

  return (
    <main
      style={{
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh"
      }}
    >
      <LandingHeader />
      <div
        className="center"
        style={{ padding: "0 8vw", position: "relative" }}
      >
        <div style={{ maxWidth: 664, width: "100%", paddingBottom: 90 }}>
          <RegistrationTitle />
          <div>
            <FlexRow>
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Name of Establishment"
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Business Type"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
              />
              </FlexRow>
              <FlexRow>
              <Select
                title="Registration Type"
                placeholder="Select Registration Type"
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                options={[
                  { label: "CAC", value: "CAC" },
                  { label: "Others", value: "others" }
                ]}
                value={registrationType}
                onChange={(e) => setRegistrationType(e.target.value)}
              />
              {(registrationType === "others") && (
                <Input
                  containerStyle={{ flex: 1 }}
                  title="Others"
                  placeholder="Please specify"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D5D7E4"
                  }}
                  labelStyle={{ fontSize: 12, color: "#19201D" }}
                  value={othersType}
                  onChange={(e) => setOthersType(e.target.value)}
                />
              )}
            </FlexRow>
            <FlexRow>
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Phone number"
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Email address"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
              />
            </FlexRow>
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
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Year of Establishment"
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Name of proprietor"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
              />
            </FlexRow>

            <FlexRow className="flex" style={{ columnGap: "2vw" }}>
              {[
                {
                  title: "Certificate of Incorporation with CAC Number",

                  action: uploadCac,
                  delete: () => setCacImage(null)
                },
                {
                  title: "Operational License",

                  action: uploadOpLicence,
                  delete: () => setOpLicenceImage(null)
                }
              ].map((type, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (!docs[idx]) type.action();
                  }}
                  style={{
                    border: "1px dashed #D5D7E4",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    marginBottom: 24,
                    flex: 1,
                    height: 100
                  }}
                  className={"hover center " + (!docs[idx] && "pointer")}
                >
                  <div className="center" style={{ position: "relative" }}>
                    <h3
                      style={{
                        marginBottom: 8,
                        color: "rgba(111, 121, 117, 1)",

                        width: 170
                      }}
                      className="f12"
                    >
                      {docs[idx] ? docs[idx]?.name : type.title + " (pdf only)"}
                    </h3>
                    <div style={{ position: "absolute", left: -50 }}>
                      {docs[idx] ? (
                        <img src="/images/pdf-file .svg" />
                      ) : (
                        <img src="/images/upload.svg" />
                      )}
                    </div>
                    {docs[idx] && (
                      <div
                        onClick={type.delete}
                        style={{ position: "absolute", right: -50 }}
                        className="pointer"
                      >
                        <img src="/images/Delete.svg" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </FlexRow>
            {/* refs */}
            <input
              accept=".pdf"
              type="file"
              ref={cacImageRef}
              onChange={(e) => handleImageChange(e.target.files, "cac")}
              style={{ display: "none" }}
            />
            <input
              accept=".pdf"
              type="file"
              ref={opLicenceImageRef}
              onChange={(e) => handleImageChange(e.target.files, "opLic")}
              style={{ display: "none" }}
            />
            <Button
              title="Proceed"
              style={{
                width: "100%",
                padding: 14,
                color: "#fff",
                backgroundColor: "#19201D",
                marginTop: 48
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
