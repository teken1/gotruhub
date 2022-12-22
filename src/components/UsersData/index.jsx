import { Link } from "react-router-dom";
import React, { useState } from "react";
import { UsersMore } from "../UsersMore";

export const UsersData = ({ cid ,
  action,
}) => {
  const [usersMoreIsOpen, setUsersMoreIsOpen] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  return (
    <>
            
    <UsersMore
      cid={cid}
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
    </>
  );
};
