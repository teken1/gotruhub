import React from "react";
import { Link } from "react-router-dom";
import { NotificationsWrapper, SearchInput, Button, TableNav } from "../..";
export const NotificationsContent = () => (
  <section
    style={{
      backgroundColor: "white",
      marginTop: 30,

      width: "100%",
      height: 1000,
    }}
  >
    <div style={{ padding: "0 32px" }}>
      <header
        className="flex justify-between"
        style={{
          padding: "25px 0",
          borderBottom: "1px solid rgba(218, 223, 221, 1)",
        }}
      >
        <h1>Notifications</h1>
        <div className="flex" style={{ columnGap: 24 }}>
          <Button btnStyles={{ padding: "15px 42px" }} title="Select" />
          <Button
            title="Mark all as read"
            btnStyles={{ padding: "15px 38px" }}
            classes="bg-grey1 fg-white br-8"
          />
        </div>
      </header>
    </div>
    <NotificationsWrapper
      containerStyle={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "red",
      }}
      extra={{ width: "40%" }}
      messageContStyles={{ height: 600 }}
      show={false}
      notifications={[1, 2, 3, 4, 5, 6]}
    />
    <TableNav classes="justify-center" />
  </section>
);
