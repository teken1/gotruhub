import React, { useState } from "react";
import { Button, ButtonLink, FlexRow, Input } from "../../components";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
import styles from "./Index.module.css";
import { Box } from "@mui/material";
export const ContactUs = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh"
      }}
    >
      <LandingHeader />
      <div className="center">
        <div style={{ maxWidth: 664, width: "100%", paddingBottom: 90 }}>
          <h1
            style={{
              color: "#19201D",

              fontSize: 24,

              fontWeight: "700",

              marginBottom: 30,
              textAlign: "center"
            }}
          >
            Contact us
          </h1>
          <div className={`${styles.container} flex flex-col align-center`}>
            <p style={{ maxWidth: 350, textAlign: "center" }}>
              Have a concern, please do send us a message we are always
              available to help out
            </p>
            <div
              style={{ maxWidth: 350, textAlign: "center", marginTop: 24 }}
              className="flex"
            >
              <img src="/images/phone.svg" />
              <p style={{ marginLeft: 9.5 }}>090 20060037</p>
            </div>
            <div
              style={{ maxWidth: 350, textAlign: "center", marginTop: 16 }}
              className="flex"
            >
              <img src="/images/email.svg" />
              <p style={{ marginLeft: 9.5 }}>gotruhub@gmail.com</p>
            </div>
            <div
              style={{ maxWidth: 350, textAlign: "center", marginTop: 16 }}
              className="flex"
            >
              <img src="/images/email.svg" />
              <p style={{ marginLeft: 9.5 }}>acandacresources@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: 90, marginBottom: 80 }}
        className="flex-col align-center pb-[90px]"
      >
        <h2
          className={styles.headings}
          style={{
            color: "#19201D",
            textAlign: "center",

            padding: "0 10vw",

            fontWeight: "700"
          }}
        >
          Sign up with Gotruhub
        </h2>
        <h2
          className={styles.headings}
          style={{
            color: "#19201D",
            textAlign: "center",

            padding: "0 10vw",

            fontWeight: "700"
          }}
        >
          to start managing your team
        </h2>
        <div className="center" style={{ marginTop: 24, marginBottom: 32 }}>
          <p
            style={{
              textAlign: "center",
              maxWidth: 580,
              lineHeight: 1.6,
              padding: "0 20px"
            }}
          >
            Create account instantly to start managing your team and resources
          </p>
        </div>
        <div>
          <ButtonLink
            link="/sign-up-biz-types"
            style={{
              padding: "16px 32px",
              backgroundColor: "#19201D",
              color: "#fff"
            }}
            title="Get Started with Gotruhub"
          />
        </div>
      </div>
      <Box
        component="footer"
        sx={{ padding: "60px", backgroundColor: "#19201D" }}
        className="flex flex-col align-center"
      >
        <Box>
          <img src="/images/logo-white.svg" />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <ul className="flex">
            {[{ title: "Terms of service" }, { title: "Privacy policy" }].map(
              (page, idx) => (
                <li
                  key={idx}
                  style={{
                    padding: "0 24px",
                    borderRight:
                      idx == 0 ? "1px solid #444A47" : "1px solid transparent"
                  }}
                >
                  <Link to="#" style={{ color: "white", whiteSpace: "nowrap" }}>
                    {page.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};
