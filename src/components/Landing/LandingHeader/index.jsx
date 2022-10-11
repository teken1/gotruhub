import {
  Box,
  ClickAwayListener,
  MenuItem,
  Paper,
  Stack,
  Grow,
  Popper,
  MenuList,
  Typography
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Index.module.css";
export const LandingHeader = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header
      style={{
        padding: "31px 6vw",
        backgroundColor: "#19201D",
        marginBottom: 152
      }}
      className="flex justify-between align-center"
    >
      <Link to="/">
        <img src="/images/logo-white.svg" />
      </Link>
      {/* harmburger menu
       */}
      <div
        onClick={() => setNavIsOpen(!navIsOpen)}
        className={`pointer ${styles.desktopHide}`}
        style={{ rowGap: 4, flexDirection: "column" }}
      >
        {[1, 2, 3].map((item, idx) => (
          <Box
            key={idx}
            style={{ height: "2px", backgroundColor: "#fff", width: "25px" }}
          />
        ))}
      </div>
      <Stack
        sx={{
          position: "absolute",
          right: 5,
          top: 80,
          backgroundColor: "#fff",
          paddingBlock: 2,

          borderRadius: 2,
          display: navIsOpen ? "block" : "none"
        }}
      >
        {[
          { title: "Home", link: "/" },
          { title: "About Us", link: "/about-us" },
          { title: "Contact Us", link: "/contact-us" },
          { title: "Login", link: "/sign-in" },
          { title: "Sign Up", link: "/sign-up-biz-types" }
        ].map((page, idx) => (
          <Link
            key={idx}
            to={page.link}
            style={{
              padding: "5px 20px",
              display: "block"
            }}
          >
            <Typography sx={{ color: "#000" }}>{page.title}</Typography>
          </Link>
        ))}
      </Stack>

      <div className={styles.mobileHide}>
        <Link to="/about-us" style={{ marginRight: "5vw", color: "#fff" }}>
          About us
        </Link>
        <Link to="/contact-us" style={{ marginRight: "5vw", color: "#fff" }}>
          Contact us
        </Link>
        <Link to="/sign-in" style={{ marginRight: "5vw", color: "#fff" }}>
          Login
        </Link>
        <Link
          to="/sign-up-biz-types"
          style={{
            padding: "15px 25px",
            border: "1px solid #fff",
            borderradius: 8,
            height: "fit-content",
            color: "white",
            borderRadius: 8
          }}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};
