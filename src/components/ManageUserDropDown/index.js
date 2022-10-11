import React, { useState } from "react";
export const ManageUserDropDown = ({ setConfigureTableIsOpen, setUserModalIsOpen}) => {
  return (
    <section className="editback">
      <div className="three-dots-drop-down">
        <div
          className="editsv hover"
          onClick={() => {setConfigureTableIsOpen(true); setUserModalIsOpen(false);}}
        >
          <img src="./images/edition.svg" />
          <h6>Configure Table</h6>
        </div>
        <div className="editsv hover">
          <img src="./images/printrep.svg" />
          <h6>Print Report</h6>
        </div>
        <div className="editsv hover">
          <img src="./images/printrep.svg" />
          <h6>Import Sheet</h6>
        </div>
        <div 
          className="editsv hover" 
          onClick={() => {setUserModalIsOpen(true); setConfigureTableIsOpen(false);}}
          >
          <img src="./images/printrep.svg" />
          <h6>Add member</h6>
        </div>
      </div>
    </section>
  );
};
