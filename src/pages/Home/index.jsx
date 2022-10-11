import React, { useState } from "react";
import { Button, ButtonLink } from "../../components";
import { GotruTrade, GotruPass, GotruPay, GotruMonitor } from "../../components/Home_";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
import styles from "./Index.module.css";
import { Box } from "@mui/material";
export const Home = () => {
  const [manageTab, setManageTab] = useState("tab1");
  const user = useUser();
  const TabNavItem = ({ idx, title, manageTab, setManageTab }) => {
 
    const handleClick = () => {
      setManageTab(idx);
    };
    
   return (
      <li onClick={handleClick} className={manageTab === idx ? "pointer" : ""} 
      style={{
        color: idx == manageTab ? "#19201D" : "#6F7975",
        fontWeight: "500",
        paddingBottom: 22,
        borderBottom:
          idx === manageTab ? "4px solid #19201D" : "4px solid #fff",
          cursor: "pointer"
      }}>
        { title }
      </li>
    );
   };
  const TabContent = ({idx, manageTab, children}) => {
    return (
      manageTab === idx ? <div className="TabContent">
        { children }
      </div>
      : null
    );
   };

  console.log(user);
  const services = [
    {
      img: "security",
      title: "Encrypted information",
      text: `We provide you with a secure space to share and manage all your information.`
    },
    {
      img: "affordable",
      title: "Affordable offers",
      text: `Our charges are unbeatable considering the services we provide.`
    },
    {
      img: "data",
      title: "Effective management of large data",
      text: `Not minding the size of information you enter, we provide stress free handling.`
    },
    {
      img: "support-service",
      title: "Suport Team",
      text: `Our support team are hands-on and we provide you with instant 24hrs support.`
    }
  ];
  return (
    <main
      style={{
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
          textAlign: "center",

          padding: "0 10vw",

          fontWeight: "700"
        }}
      >
        Manage your mega stores, employees, team members and collect revenue with just one app
      </h1>
      <Box
        className={`center ${styles.container}`}
        sx={{ marginTop: 6, marginBottom: 8 }}
      >
        <p style={{ textAlign: "justify", maxWidth: 850, lineHeight: 1.6 }}>
        Gotruhub is a multi tenant digital platform built for diverse functions which include cooperative trading. It also allow you manage your mega stores, manage staff members, help schools/parents keep track of students security and school attendance record. <Link to="/about-us" className="reset">Learn more</Link>
        </p>
      </Box>
      <Box className="center">
        <ButtonLink
          link="/sign-up-biz-types"
          style={{
            backgroundColor: "#19201D",
            color: "#fff",
            padding: "16px 35px",
            fontSize: 16
          }}
          title="Get Started with Gotruhub"
        />
      </Box>
      <div className="center" style={{ marginTop: 80, padding: "0 12vw" }}>
        <img
          src="/images/land-1.svg"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ marginTop: 200 }} className="flex-col align-center">
        <h2
          style={{
            color: "#19201D",
            textAlign: "center",

            padding: "0 10vw",

            fontWeight: "700",
            maxWidth: 1100
          }}
          className={styles.headings}
        >
          We’re all about helping you manage your organization
        </h2>
        <div
          className={`center ${styles.container}`}
          style={{ marginTop: 24, marginBottom: 32 }}
        >
          <p style={{ textAlign: "center", maxWidth: 580, lineHeight: 1.6 }}>
          Our product is aimed at simplifying  organization's management processes and helping to keep track of team activities.
          </p>
        </div>
      </div>
      {/* management tabs */}
      <div>
        <ul className="flex justify-center" style={{ columnGap: 25 }}>
        <TabNavItem title="Gotru Trade" idx="tab1" manageTab={manageTab} setManageTab={setManageTab}/>
        <TabNavItem title="Gotru Pass" idx="tab2" manageTab={manageTab} setManageTab={setManageTab}/>
        <TabNavItem title="Gotru Pay" idx="tab3" manageTab={manageTab} setManageTab={setManageTab}/>
        <TabNavItem title="Gotru Monitor" idx="tab4" manageTab={manageTab} setManageTab={setManageTab}/>
        </ul>
        
        <TabContent idx="tab1" manageTab={manageTab}>
          <GotruTrade/>
        </TabContent>
        <TabContent idx="tab2" manageTab={manageTab}>
          <GotruPass/>
        </TabContent>
        <TabContent idx="tab3" manageTab={manageTab}>
          <GotruPay/>
        </TabContent>
        <TabContent idx="tab4" manageTab={manageTab}>
          <GotruMonitor/>
        </TabContent>
        
        
      </div>
      <div
        style={{
          backgroundColor: "#19201D",
          padding: "134px 7vw 103px 7vw",
          marginTop: 104
        }}
      >
        <div className="center" style={{ marginBottom: 82 }}>
          <h2
            className={styles.headings}
            style={{
              color: "#fff",

              maxWidth: 600,
              textAlign: "center"
            }}
          >
            Why Corporate Organizations choose Gotruhub
          </h2>
        </div>
        <Box>
          <ul style={{ columnGap: 32 }} className={styles.services}>
            {services.map((item, idx) => (
              <li key={idx}>
                <div className="flex-col align-center ">
                  <div className="center" style={{ width: 60, height: 60 }}>
                    <img
                      alt="an image"
                      src={`/images/${item.img}.svg`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <p
                    style={{ color: "#fff", marginBottom: 16, marginTop: 32, textAlign:"center" }}
                    className="f24"
                  >
                    {item.title}
                  </p>
                  <p
                    style={{ color: "#DADFDD", textAlign: "center" }}
                    className="f16"
                  >
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Box>
      </div>
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
    </main>
  );
};
