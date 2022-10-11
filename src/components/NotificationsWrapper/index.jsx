import React from "react";
import { Link } from "react-router-dom";
import { SearchInput } from "..";
export const NotificationsWrapper = ({
  containerStyle = {
    position: "fixed",
    top: 70,
    backgroundColor: "white",
    boxShadow: "0px 4px 44px rgba(25, 32, 29, 0.16)",
    width: "32%",
    height: "80%",
  },
  extra = {},
  show = true,
  messageContStyles = { height: 450, overflowY: "auto" },
  notifications = [1, 4, 5, 7, 7, 5, 7, 8],
  setNotificationIsOpen,
}) => (
  <section style={containerStyle} className="br-8">
    <div style={{ ...extra }}>
      <div style={{ padding: "0 32px" }}>
        <header
          className="justify-between align-center"
          style={{
            paddingBottom: 24,
            marginBottom: 24,
            padding: "32px 0",
            borderBottom: "1px solid rgba(219, 226, 223, 1)",
            display: show ? "flex" : "none",
          }}
        >
          <h2 className="fg-grey1 fw500 f16">Notifications</h2>
          <div>
            <img
              src="/images/close.svg"
              className="hover pointer"
              onClick={() => setNotificationIsOpen(false)}
            />
          </div>
        </header>
      </div>
      <div style={{ padding: "0 32px 32px 32px" }}>
        <SearchInput placeholder="Search for items by name, category, manufacturer, " />
      </div>
      <div className="flex-col justify-between" style={{ height: "70%" }}>
        <div>
          <ul
            style={{
              padding: "0 16px",
              height: messageContStyles.height,
              overflowY: "auto",
            }}
          >
            {notifications.map((notification, idx) => (
              <li
                className="flex justify-between pointer align-center br-8 hover-border"
                style={{
                  columnGap: 16,
                  marginBottom: 5,
                  padding: "16px",
                }}
                key={idx}
              >
                <div className="flex align-center" style={{ columnGap: 30 }}>
                  <div>
                    <img
                      src="/images/avatar.svg"
                      style={{ width: 48, height: 48 }}
                    />
                  </div>
                  <div>
                    <p
                      className="f14 fg-grey1 fw500 "
                      style={{ marginBottom: 8 }}
                    >
                      A sale has been made by Bright Mba to Ibrahim Balabala
                      Suleiman
                    </p>
                    <p className="f12 fg-grey5">2 mins ago</p>
                  </div>
                </div>
                <div>
                  <div className="justify-end flex">
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: "rgba(64, 145, 108, 1)",
                        borderRadius: 100,
                      }}
                      className="center"
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: "#fff",
                          borderRadius: 100,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="center"
          style={{
            padding: 26,
            borderTop: "1px solid rgba(219, 226, 223, 1)",
            display: show ? "flex" : "none",
          }}
        >
          <Link to="/notifications" className="'fg-grey1 f14">
            See all Activities
          </Link>
        </div>
      </div>
    </div>
  </section>
);
