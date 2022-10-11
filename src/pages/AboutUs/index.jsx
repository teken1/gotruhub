import React, { useState } from "react";
import { Button, ButtonLink, FlexRow, Input } from "../../components";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
import styles from "./Index.module.css";
import { Box } from "@mui/material";
export const AboutUs = () => {
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
      <h1
        className={styles.headings}
        style={{
          color: "#19201D",
          textAlign: "left",

          padding: "0 10vw",

          fontWeight: "700",

          
        }}
      >
        About Gotruhub
      </h1>
      <p style={{fontWeight:"bold", marginTop:24, padding: "0 10vw", fontSize: "25px"}}>Manage your mega stores, employees, team members and collect revenue with just one app</p>
      <Box
        style={{padding:"0 10vw"}}
        sx={{ marginTop: 6, marginBottom: 8 }}
      >
        <p style={{ textAlign: "justify", lineHeight: 1.6 }}>
        Gotruhub is a multi tenant digital platform built for diverse functions which include cooperative trading. It enable you manage your mega stores, manage members of staff, help schools/parents keep track of students security and school attendance record. It as well make schools accountable for students in their custody and also provide you with tools that can help you in revenue collection and accountability.<br/>
        Gotruhub make sales and access to payments easy. It alerts you on the arrival and departure of your minors at schools, ensures that schools take responsibility of students times in their care. It keeps track of staff promptness to duty and as well helps the Government/ corporate organizations keep detailed track of revenue sources and further helps in collecting and keeping records of revenue from such sources.
        </p>
      </Box>
      <div
        style={{ marginTop: 200, marginBottom: 80 }}
        className="flex-col align-center pb-[90px]"
      >
        <h2
          className={styles.headings}
          style={{
            color: "#19201D",
            textAlign: "center",

            padding: "0 10vw",

            fontWeight: "700",
            maxWidth: 1100
          }}
        >
          Sign up with Gotruhub to start managing your team
        </h2>
        <div
          className={`center ${styles.container}`}
          style={{ marginTop: 24, marginBottom: 32 }}
        >
          <p style={{ textAlign: "center", maxWidth: 580, lineHeight: 1.6 }}>
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
      <footer
        style={{ padding: 60, backgroundColor: "#19201D" }}
        className="flex flex-col align-center"
      >
        <div>
          <img src="/images/logo-white.svg" />
        </div>
        <div style={{ marginTop: 50 }}>
          <ul className="flex">
            {[{ title: "Terms of service" }, { title: "Privacy policy" }].map(
              (page, idx) => (
                <li
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
        </div>
      </footer>
    </Box>
  );
};
