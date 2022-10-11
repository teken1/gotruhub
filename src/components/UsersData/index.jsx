import { Link } from "react-router-dom";
import React, { useState } from "react";
import { UsersMore } from "../UsersMore";

export const UsersData = ({
  sn,
  name,
  joined,
  department,
  level,
  attendance,
  spent,
  action,
}) => {
  const [usersMoreIsOpen, setUsersMoreIsOpen] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  return (
    <>
      <td style={{ width: 20 }}>{sn}</td>
      <td>{name}</td>
      <td>{joined}</td>
      <td>{department}</td>
      <td>{level}</td>
      <td>{attendance}</td>
      <td>{spent}</td>
      <td style={{ position: "relative" }}>
        <UsersMore
          isOpen={usersMoreIsOpen}
          isSuspended={isSuspended}
          setIsSuspended={setIsSuspended}
        />
        <button
          className="CTA"
          onClick={() => setUsersMoreIsOpen(!usersMoreIsOpen)}
        >
          {action}
        </button>
      </td>
    </>
  );
};
