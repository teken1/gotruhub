import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MainNav, NotificationsWrapper } from "../../";

export const MainLayout = ({ children }) => {
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  return (
    <div className="flex">
      <MainNav
        notificationIsOpen={notificationIsOpen}
        setNotificationIsOpen={setNotificationIsOpen}
      />

      <main
        style={{
          padding: "48px 75px",
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        {children}
        {notificationIsOpen && (
          <NotificationsWrapper setNotificationIsOpen={setNotificationIsOpen} />
        )}
      </main>
    </div>
  );
};
