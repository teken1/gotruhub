import React, { useRef, useState } from "react";
import { Button, FlexRow, Input, Select } from "../../components";
import {
  ManageAttendance,
  ManageStore,
  RegistrationTitle
} from "../../components/Home_";
import toast, { Toaster } from "react-hot-toast";
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
  const [personalAddress, setPersonalAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const notify = (message) => toast(message);

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

  const myHeaders = new Headers();
myHeaders.append("domain", 'smart');

  const raw = {    
    "personalAddress":personalAddress,
    "email":email,
    "organizationType":"Registered Organizations",
    "phone":phone,
    "name":name,
    "businessType":businessType,
    "businessAddress":businessAddress,
    "yearOfEstablishment":yearOfEstablishment,
    "nameOfProprietor":nameOfProprietor,
  };

  const handleSignUp = async () => {
    const resp = await fetch(
      "https://gotruhub-api.herokuapp.com/api/v1/organizations/registeration/personal",
      {
        method: "POST",
        // headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }
    );
    const data = await resp.json();
    if (data.error) {
      notify(data.error.message);
      return;
    }
    const myData = JSON.stringify(data);
    console.log(data);
    return myData;

  }

  return (
    <main
      style={{
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh"
      }}
    >
    <Toaster
      toastOptions={{
        className: "",
        style: {
          border: "1px solid rgba(145, 64, 64, 1)",
          padding: "16px",
          color: "rgba(145, 64, 64, 1)"
        }
      }}
    />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Business Type"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Email address"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FlexRow>
            <Input
              containerStyle={{ flex: 1 }}
              title="Business Address"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #D5D7E4"
              }}
              labelStyle={{ fontSize: 12, color: "#19201D" }}
              value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
            />
            <Input
              containerStyle={{ flex: 1 }}
              title="Personal Address"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #D5D7E4"
              }}
              labelStyle={{ fontSize: 12, color: "#19201D" }}
              value={personalAddress}
                onChange={(e) => setPersonalAddress(e.target.value)}
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
                value={yearOfEstablishment}
                onChange={(e) => setYearOfEstablishment(e.target.value)}
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Name of proprietor"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                value={nameOfProprietor}
                onChange={(e) => setNameOfProprietor(e.target.value)}
              />
            </FlexRow>

            <FlexRow className="flex" style={{ columnGap: "2vw" }}>
              {/* {[
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
              ))} */}
              { registrationType === "CAC" &&
              <div
                onClick={() => {
                  if (!cacImage) uploadCac();
                }}
                style={{
                  border: "1px dashed #D5D7E4",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  marginBottom: 24,
                  flex: 1,
                  height: 100
                }}
                className={"hover center " + (!cacImage && "pointer")}
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
                    {cacImage ? cacImage?.name : "Certificate of Incorporation with CAC Number" + " (pdf only)"}
                  </h3>
                  <div style={{ position: "absolute", left: -50 }}>
                    {cacImage ? (
                      <img src="/images/pdf-file .svg" />
                    ) : (
                      <img src="/images/upload.svg" />
                    )}
                  </div>
                  {cacImage && (
                    <div
                      onClick={() => setCacImage(null)}
                      style={{ position: "absolute", right: -50 }}
                      className="pointer"
                    >
                      <img src="/images/Delete.svg" />
                    </div>
                  )}
                </div>
              </div>
              }
              { registrationType !== "" &&
                registrationType !== "Select Registration Type" &&
              <div
                onClick={() => {
                  if (!opLicenceImage) uploadOpLicence();
                }}
                style={{
                  border: "1px dashed #D5D7E4",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  marginBottom: 24,
                  flex: 1,
                  height: 100
                }}
                className={"hover center " + (!opLicenceImage && "pointer")}
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
                    {opLicenceImage ? opLicenceImage?.name : "Operational License / Permit" + " (pdf only)"}
                  </h3>
                  <div style={{ position: "absolute", left: -50 }}>
                    {opLicenceImage ? (
                      <img src="/images/pdf-file .svg" />
                    ) : (
                      <img src="/images/upload.svg" />
                    )}
                  </div>
                  {opLicenceImage && (
                    <div
                      onClick={() => setOpLicenceImage(null)}
                      style={{ position: "absolute", right: -50 }}
                      className="pointer"
                    >
                      <img src="/images/Delete.svg" />
                    </div>
                  )}
                </div>
              </div>
              }
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
              onClick={handleSignUp}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
