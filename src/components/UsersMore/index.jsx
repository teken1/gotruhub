import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomerReport } from "../CustomerReport";
import { SuspensionModal } from "../modals";

export const UsersMore = ({ isOpen = true, isSuspended, setIsSuspended, cid }) => {
  const [reportIsOpen, setReportIsOpen] = useState(false);
  const [suspensionModalIsOpen, setSuspensionModalIsOpen] = useState(false);
  return (
    <section
      className="sales-dropdown"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="three-dots-drop-down">
        <div className="editsv">
          <img src="./images/edition.svg" />
          <Link to={"/customer-report/?id="+cid}>Customer Report</Link>
        </div>
        <div className="editsv">
          <img src="./images/user.svg" />
          <Link to={"/customer-profile/?id="+cid}>See Profile</Link>
        </div>
        <div
          className="editsv"
          onClick={() => {
            setSuspensionModalIsOpen(!suspensionModalIsOpen) &&
              setIsSuspended(!isSuspended);
          }}
        >
          <SuspensionModal
            cid={cid}
            isOpen={suspensionModalIsOpen}
            closeModal={setSuspensionModalIsOpen}
            setIsSuspended={setIsSuspended}
            isSuspended={isSuspended}
          />
          <img src="./images/suspend.svg" />
          <h6>{isSuspended ? "Resume user" : "Suspend user"}</h6>
        </div>
      </div>
    </section>
  );
};
