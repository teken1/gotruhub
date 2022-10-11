import React, { useState } from "react";
import { Button, FlexRow, Input, Loader } from "../../components";
import { useHttpServices } from "../../hooks";
import { LandingHeader } from "../../components/Landing";
import { RegistrationStatusModal } from "../../components/modals";
import { Alert, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { RegistrationTitle } from "../../components/Home_";

export const PersonalBiz = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [yearOfEstablishment, setYearOfEstablishment] = useState("");
  const [nameOfProprietor, setNameOfProprietor] = useState("");
  const [personalAddress, setPersonalAddress] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const body = {
    name,
    businessType,
    phone,
    email,
    yearOfEstablishment,
    nameOfProprietor,
    personalAddress,
    businessAddress,
    organizationType: "personal"
  };
  console.log(body);
  const { postData, isLoading } = useHttpServices();

  const register = async () => {
    const data = await postData("/organizations/registeration/personal", body);
    console.log(data);
    if (data.error) {
      console.log(data.error);
      setErrorMessage(data?.error?.message);
      return;
    }
    setIsSuccessful(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorMessage("");
  };

  return (
    <main
      style={{
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh"
      }}
    >
      <RegistrationStatusModal
        isOpen={isSuccessful}
        closeModal={(e) => setIsSuccessful(false)}
      />

      <Snackbar open={!(errorMessage == "")}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <LandingHeader />
      <div
        className="center"
        style={{ padding: "0 8vw", position: "relative" }}
      >
        <div style={{ maxWidth: 664, width: "100%", paddingBottom: 90 }}>
          <RegistrationTitle title="Personal Businesses" />

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
                type="tel"
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
                type="email"
              />
            </FlexRow>

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

            <Input
              containerStyle={{ flex: 1 }}
              title="Personal address"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #D5D7E4"
              }}
              labelStyle={{ fontSize: 12, color: "#19201D" }}
              value={personalAddress}
              onChange={(e) => setPersonalAddress(e.target.value)}
            />
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

            <Button
              onClick={register}
              title={isLoading ? <Loader size={15} /> : "Proceed"}
              style={{
                width: "100%",
                padding: 14,
                color: "#fff",
                backgroundColor: "#19201D",
                marginTop: 48,
                opacity: isLoading ? 0.7 : 1
              }}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
