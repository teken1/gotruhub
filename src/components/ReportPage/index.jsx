import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConfigureTable } from "../ConfigureTable";
import { ConfigureTableReport } from "../ConfigureTableReport";
import { Filter } from "../Filter";
import { TableNav } from "../Helpers/TableNav";
import { ReportRow } from "../ReportRow";
import { SalesModal } from "../modals";

export const ReportPage = () => {
  const navigate = useNavigate();
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [salesModalIsOpen, setSalesModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };
  return (
    <main>
      <img className="goback" src="./images/go.svg"  onClick={() => navigate(-1)} />
      <SalesModal isOpen={salesModalIsOpen} />
      <section className="vertical">
        <section className="salesreport">
          <div className="reportfile">
            <h3>Report for Emmanuel Joseph</h3>

            <section className="sectionfilter">
              <div className="printbutts">
                <button className="reportbutt">Print Report</button>
                <div onClick={changeEditState}>
                  {editIsOpen && (
                    <ConfigureTableReport
                      changeModalState={setSalesModalIsOpen}
                    />
                  )}

                  <button className="dotbutts" onClick={changeEditState}>
                    <img src="./images/3dots.svg"></img>
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div className="department">
            <h3>Class/Department: Department one</h3>
          </div>

          <div className="reportTable">
            <table>
              <thead>
                <th>S/N</th>
                <th>Date</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit </th>
                <th>Unit Price</th>
                <th>T. amount</th>
                <th>Action</th>
              </thead>
              <tbody>
                {[2, 4, 3, 1, 5, 6, 3, 1, 6].map((item, idx) => (
                  <ReportRow sn={idx * 1 + 1} />
                ))}
              </tbody>
            </table>
          </div>

          <section className="Navi">
            <TableNav />
          </section>
        </section>
      </section>

      <SalesModal isOpen={salesModalIsOpen} closeModal={setSalesModalIsOpen} />
    </main>
  );
};
