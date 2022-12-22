import React, { useState, useRef } from "react";
import { UsersTable } from "../../UsersTable";
import { ConfigureUserTableModal, Table, ManageUserDropDown, RegisterUserModal, ImportUserSheetTable,} from "../../";
import { NMSelect } from "../../";
import { UsersFilter } from "../../UsersFilter";
import { filter } from "@chakra-ui/react";
import { UsersSearch } from "../../UsersSearch";
import { UsersSearchFilter } from "../../UsersSearchFilter";
import { Toaster } from "react-hot-toast";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";

export const ManageUsersContent = () => {
  const [isSales, setIsSales] = useState(true);
  const [isExpanded, setExpanded] = React.useState(true);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [salesModalIsOpen, setSalesModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [configureTableIsOpen, setConfigureTableIsOpen] = useState(false);
  const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [filterValue2, setFilterValue2] = useState('');
  const [filterType, setFilterType] = useState('');

  const handlePrint = () =>{
  const now = new Date().toDateString();
   const printSection = document.querySelector(".printSection").outerHTML;
   const a= window.open('', '', 'height=500, width=500');
   a.document.write('<html>');
   a.document.write('<body > <h2>Report Sheet Generated On ' + now );
   a.document.write(printSection);
   a.document.write('</body></html>');
   a.document.close();
   a.print();
  };

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };

  return (
    <>
      <RegisterUserModal
        isOpen={userModalIsOpen}
        closeModal={setUserModalIsOpen}
      />
      <section style={{textAlign:"right"}}>
      <div style={{marginTop:"0px"}}>
          <button style={{
            border: "1px solid #19201D",
            borderRadius: "4px",
          marginBottom:16,}}
            className="addProduct"
            onClick={() => {
              setUserModalIsOpen(!userModalIsOpen);
            }}
          >
            <div className="product">
              <div>
                <img style={{verticalAlign:"bottom"}} src="./images/plusSign.svg" />
              </div>
              <p style={{fontSize:17}}> Add New Member</p>
            </div>
          </button>
      </div>
    </section>
      <section className="regsec" style={{paddingBottom:24,overflowX:"hidden",marginTop:"0px",minHeight:600}}>
        <div className="dotholder" style={{padding:32}}>
          <h3>Users</h3>
          <div className={"searchItems"} style={{width:300,cursor:"pointer"}}>
            <img src="./images/searchicon.svg" />
            <input
              type="search"
              placeholder={
                "Search for user by name"
              }
              value={searchValue}
              onInput={(e) => 
                setSearchValue(e.target.value)}
            ></input>
          </div>
          <section className={"sectionfilter"}>
            <div className="filterdate">
              <label style={{fontWeight:"bold"}}>Filter by:</label>
              <div className="to-fro">
                <NMSelect
                  style={{fontWeight:500}}
                  placeholder="Select Filter Type"
                  options={[
                    { label: "Date Joined", value: "date" },
                    { label: "Level", value: "level" },
                    { label: "Department", value: "dept" }
                  ]}
                  value={filterType}
                  onChange={(e) => {
                    const inputType = e.target.value;
                    setFilterType(e.target.value);
                    setFilterValue("");
                    if (inputType == "date") {
                      document.querySelector(".filterInput").type="date";
                      document.querySelector(".filterInput2").style.display="block";
                      document.querySelector(".filterLabel").style.display="block";
                    } else {
                      document.querySelector(".filterInput").type="text";
                      document.querySelector(".filterInput2").style.display="none";
                      document.querySelector(".filterLabel").style.display="none";
                    }
                  }}
                />
                <input type="text" className="filterInput" placeholder="Filter value:" style={{padding:"5px 10px"}}
              value={filterValue}
              onChange={(e) => {
                setFilterValue(e.target.value)}
              }
                />
                <label className="filterLabel" style={{display:"none",fontWeight:"bold",marginTop:15}}>&mdash;</label>
                <input type="date" className="filterInput2" placeholder="Filter value:" style={{padding:"5px 10px",display:"none"}}
              value={filterValue2}
              onChange={(e) => {
                setFilterValue2(e.target.value)}
              }
                />
              </div>
            </div>
          </section>
          <div className="threed">
            <button onClick={handlePrint} style={{paddingLeft:15,paddingRight:15}}>Print Report</button>
            <div>
              {editIsOpen && (
                <ManageUserDropDown
                  setConfigureTableIsOpen={setConfigureTableIsOpen}
                  setUserModalIsOpen={setUserModalIsOpen}
                />
              )}
              <button onClick={changeEditState}>
                <img src="./images/3dots.svg"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
        <section className="producthead printSection" style={{paddingTop:32}}>
            { 
              searchValue !== "" && filterValue === "" && filterValue2 === "" ?
              <UsersSearch valueToSearch={searchValue}/>
              :
              (searchValue !== "" && filterValue !== "" && filterType !== "") || (searchValue !== "" && filterValue2 !== "" && filterType !== "") ?
              <UsersSearchFilter valueToSearch={searchValue} valueToFilter={filterValue} valueToFilter2={filterValue2} typeOfFilter={filterType}/>
              :
              (searchValue == "" && filterValue !== "" && filterType !== "") || (searchValue == "" && filterValue2 !== "" && filterType !== "") ?
              <UsersFilter valueToFilter={filterValue} valueToFilter2={filterValue2} typeOfFilter={filterType}/>
              :
              <UsersTable/>
            }
        </section>

        <section className="next" style={{padding:32,}}>
          <div className="backfront">
            <img src="./images/back.svg"></img>
            <p>1</p>
            <img src="./images/front.svg"></img>
          </div>
        </section>
      </section>
      {/* <ConfigureUserTableModal
        isOpen={configureTableIsOpen}
        closeModal={setConfigureTableIsOpen}
      /> */}
      <ImportUserSheetTable
        isOpen={configureTableIsOpen}
        closeModal={setConfigureTableIsOpen}
      />
    </>
  );
};
