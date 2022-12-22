import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
export const ManageUserDropDown = ({ setConfigureTableIsOpen, setUserModalIsOpen}) => {
  
  const handlePrint = () => {
    const now = new Date().toDateString();
     const printSection = document.querySelector(".printSection").outerHTML;
     const a= window.open('', '', 'height=500, width=500');
     a.document.title = "Users Report Sheet " + now;
     a.document.write('<html>');
     a.document.write('<body > <h2>Report Sheet Generated On ' + now );
     a.document.write(printSection);
     a.document.write('</body></html>');
     a.document.close();
     a.print();
    };
  return (
    <section className="editback">
      <div className="three-dots-drop-down">
        {/* <div
          className="editsv hover"
          onClick={() => {setConfigureTableIsOpen(true); setUserModalIsOpen(false);}}
        >
          <img src="./images/edition.svg" />
          <h6>Configure Table</h6>
        </div> */}
        <div className="editsv hover" style={{cursor:"pointer"}} onClick={handlePrint}>
          <img src="./images/printrep.svg" />
          <h6>Print Report</h6>
        </div>
        <div className="editsv hover"
        onClick={() => {setConfigureTableIsOpen(true); setUserModalIsOpen(false);}}
        >
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
