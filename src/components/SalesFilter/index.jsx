import React, { useState } from "react";
import { Productflex } from "../Productflex";
import { EditTime } from "../EditTime";
import { ProductTable } from "../ProductTable";
import { SalesTable } from "../SalesTable";
import { TableNav } from "../Helpers/TableNav";
import { SalesModal } from "../modals";
import { ConfigureTable } from "../ConfigureTable";
import { FilterModal } from "../modals/FilterModal";
import { Filter } from "../Filter";
import { borderRadius } from "@mui/system";
import { GeneralProduct } from "../GeneralProduct";

export const SalesFilter = ({isExpanded, filterValue,
   filterValue2, setFilterValue, setFilterValue2 }) => {
  const [isSales, setIsSales] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [salesModalIsOpen, setSalesModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };

  
  const handlePrint = () =>{
    const now = new Date().toDateString();
     const printSection = document.querySelector(".printReport").outerHTML;
     const a= window.open('', '', 'height=500, width=500');
     a.document.write('<html>');
     a.document.write('<body > <h2>Report Sheet Generated On ' + now );
     a.document.write(printSection);
     a.document.write('</body></html>');
     a.document.close();
     a.print();
    };

  return (
    <main className={isExpanded ? "" : "hide-x-overflow"}>
      <SalesModal isOpen={salesModalIsOpen} />
      <FilterModal isOpen={filterModalIsOpen} />
      <section className="vertical">
        <section className="productholdSales" style={{padding:"0px 32px"}}>
          <div className="productholdSalesdiv">
            <h3>Sales Record</h3>

            <div className={!isExpanded ? "searchItems height-50":"searchItems"}>
              <img src="./images/searchicon.svg" />
              <input
                type="search"
                placeholder={
                  "Search for items by name, category, manufacturer, "
                }
                value={searchValue}
                onInput={(e) => 
                  setSearchValue(e.target.value)}
              ></input>
            </div>
            <section className={isExpanded ? "sectionfilter" : "hide"}>
              <div className="filterdate">
                <label>Filter by date:</label>
                <div className="to-fro">
                <input type="date" className="filterInput" placeholder="From" style={{padding:"5px 10px"}}
              value={filterValue}
              onChange={(e) => {
                setFilterValue(e.target.value)}
              }
                />
                <input type="date" className="filterInput2" placeholder="To" style={{padding:"5px 10px"}}
              value={filterValue2}
              onChange={(e) => {
                setFilterValue2(e.target.value)}
              }
                />
                </div>
              </div>
              <div className="printbutts">
                <button className="reportbutt" onClick={handlePrint}>Print Report</button>
                {/* <div>
                  {editIsOpen && (
                    <ConfigureTable changeModalState={setSalesModalIsOpen} />
                  )}

                  {editIsOpen && (
                    <Filter changeModalState={setSalesModalIsOpen} />
                  )}
                  <button className="dotbutts" onClick={changeEditState}>
                    <img src="./images/3dots.svg"></img>
                  </button>
                </div> */}
              </div>
            </section>
          </div>
        </section>

        <section className="producthead printReport">
          <SalesTable />
        </section>

        <TableNav />
      </section>
      <GeneralProduct isExpanded={isExpanded} />
      {/* <section className="mode">jk/assm</section> */}
      <SalesModal isOpen={salesModalIsOpen} closeModal={setSalesModalIsOpen} />
      <FilterModal
        isOpen={filterModalIsOpen}
        closeModal={setFilterModalIsOpen}
      />
    </main>
  );
};
