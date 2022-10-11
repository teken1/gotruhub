import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavSection, RegisterUserModal } from "..";
import { Context } from "../../contexts";

export const MainNav = ({ setNotificationIsOpen }) => {
  const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);
  const { navIsCollapsed, setNavIsCollaped } = useContext(Context);
  console.log(navIsCollapsed);
  const handleCollapseNav = () => {};
  return (
    <>
      {/* {userModalIsOpen && <RegisterUserModal closeModal={setUserModalIsOpen} />} */}
      <RegisterUserModal
        closeModal={setUserModalIsOpen}
        isOpen={userModalIsOpen}
      />
      <nav
        className="bg-primary1 animate-p6"
        style={{
          width: navIsCollapsed ? "fit-content" : 320,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <div style={{ padding: "48px 32px 20px", width: "fit-content" }}>
          <div
            style={{ marginBottom: 48 }}
            className="justify-between flex align-center"
          >
            {navIsCollapsed ? (
              <img src="/images/logo-only.svg" />
            ) : (
              <img src="/images/logo-white.svg" />
            )}

            <img
              src="/images/harm-burger.svg"
              className="hover pointer"
              onClick={() => setNavIsCollaped(!navIsCollapsed)}
            />
          </div>
          <div className="flex" style={{ marginBottom: 48 }}>
            <button
              style={{
                padding: `21px ${navIsCollapsed ? 30 : 24}px`,
                border: "1px solid #fff",
              }}
              className="br-4 transparent center hover"
              onClick={() => setUserModalIsOpen(true)}
            >
              <img src="/images/add.svg" />
              {!navIsCollapsed && (
                <span
                  className="fg-white"
                  style={{ marginLeft: 16, whiteSpace: "nowrap" }}
                >
                  Register member
                </span>
              )}
            </button>
          </div>
          <div style={{ border: "1px solid rgba(68, 74, 71, 1)" }} />
        </div>
        <NavSection
          title="MAIN MENU"
          routes={[
            {
              page: "Dashboard",
              img: "dashboard-active.svg",
              link: "/dashboard",
            },
            {
              page: "Manage Users",
              img: "manage-users-active.svg",
              link: "/manage-users",
            },
            { page: "Wallet", img: "wallet-active.svg", link: "/wallet" },
          ]}
        />
        <NavSection
          title="REPORT"
          routes={[
            {
              page: "Attendance",
              img: "dashboard-active.svg",
              link: "/attendance",
            },
            {
              page: "Stocks Inventory",
              img: "manage-users-active.svg",
              link: "/stocks-inventory",
            },
          ]}
        />
        <NavSection
          title="PREFERENCES"
          routes={[
            {
              page: "Messaging",
              img: "message.svg",
              link: "/messaging",
            },
            {
              page: "Notifications",
              img: "notification.svg",
              link: "/notifications",
              action: () => setNotificationIsOpen(true),
            },
            {
              page: "Settings",
              img: "setting.svg",
              link: "/settings",
            },
          ]}
        />
        <section
          style={{ marginTop: 35 }}
          className="flex-col align-center">
          <div style={{border: "1px solid rgb(68, 74, 71)", width: "75%"}}></div>
          <ul style={{ marginTop: 17.33 }}>
              <li>
                {!navIsCollapsed && (
                <Link
                  to="/profile"
                  style={{
                    padding: "10px 32px 10px",
    
                    marginBottom: 4,

                    marginLeft: "0px",

                  }}
                  className="flex align-center hover"
                >
                  <img src="/images/avatar.svg" style={{ marginRight: 12, }} />
                    <p
                      className="fg-dark7 font-std"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Brightmac<br/><span style={{color:"#6F7975", fontSize:"12px", fontWeight:450 }}>Admin</span>
                    </p>
                </Link>
                    )}
                {navIsCollapsed && (
                <Link
                  to="/profile"
                  style={{
                    padding: "0px",
    
                    marginBottom: 4,

                    marginLeft: "0px",

                  }}
                  className="align-center hover"
                >
                  <img src="/images/avatar.svg"/>
                    <p
                      className="fg-dark7 font-std"
                      style={{ whiteSpace: "nowrap", textAlign: "center" }}
                    >
                      Brightmac<br/><span style={{color:"#6F7975", fontSize:"12px", fontWeight:450 }}>Admin</span>
                    </p>
                </Link>
                    )}
              </li>
          </ul>
          <div style={{border: "1px solid rgb(68, 74, 71)", width: "75%", marginTop:"10px"}}></div>
        </section>
        <NavSection
         routes={[
            {
              page: "Logout",
              img: "logout.svg",
              link: "/logout",
            },
          ]}
        />
        {navIsCollapsed &&(
          <p className="fg-dark7 std" style={{textAlign:"center"}}>
            Log out
          </p>
        )}
        <div style={{marginTop:"30px"}}></div>
      </nav>
    </>
  );
};
