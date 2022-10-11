import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sequence } from "../../FormElements/Sequence";
import { EditTime, TableNav } from "../..";
import { EditTimeModal } from "../..";
import styles from "./attend.css";

export const AttendanceContent = () => {
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [edittimeModalIsOpen, setEdittimeModalIsOpen] = useState(false);

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };

  // const handleCount = () => {
  //   setCount(count + 1);
  // };
  // const handleCountDecrease = () => {
  //   if (count > 1) setCount(count - 1);
  // };

  return (
    <>
      <section className="regsec">
        <div className="dotholder" style={{padding:"24px 32px"}}>
          <h3>Attendance Register</h3>
          <div className="threed">
            <button style={{paddingLeft:15,paddingRight:15}}>Print Report</button>
            <div>
              {editIsOpen && (
                <EditTime changeModalState={setEdittimeModalIsOpen} />
              )}
              <button onClick={changeEditState}>
                <img src="./images/3dots.svg"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="bottom"></div>

        <table className="tsec">
          <thead className="headings">
            {/* <div className="serial"> */}
            <th>S/N</th>
            <th>Name</th>
            {/* </div> */}
            {/* <div className="remark"> */}
            <th>Attendace </th>
            <th>Remark</th>
            <th>Department head</th>
            <th>Dept head’s contact</th>
            <th>Action</th>
            {/* </div> */}
          </thead>
          <tbody className="tbt">
            {[2, 3, 4, 4, 5, 5, 53, 5, 56, 5].map((item, idx) => (
              <Sequence sn={idx * 1 + 1} />
            ))}
          </tbody>
        </table>

        <TableNav />
      </section>
      {/* modal */}
      <EditTimeModal
        isOpen={edittimeModalIsOpen}
        closeModal={setEdittimeModalIsOpen}
      />
    </>
  );
};
