import React from "react";

export const ConfigureTable = ({ changeModalState }) => {
  return (
    <section className="editback">
      <div className="three-dots-drop-down">
        <div className="editsv" onClick={() => changeModalState(true)}>
          <img src="./images/edition.svg" />
          <h6>Configure Table</h6>
        </div>
        <div className="editsv">
          <img src="./images/printrep.svg" />
          <h6>Print Report</h6>
        </div>
        <div className="editsv">
          <img src="./images/Filter.svg" />
          <h6>Filter</h6>
        </div>
      </div>
    </section>
  );
};
