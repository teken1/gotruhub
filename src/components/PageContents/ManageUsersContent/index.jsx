import React, { useState } from "react";
import { UsersTable } from "../../UsersTable";
import { ConfigureUserTableModal, Table, ManageUserDropDown, RegisterUserModal } from "../../";

export const ManageUsersContent = () => {
  const [isSales, setIsSales] = useState(true);
  const [isExpanded, setExpanded] = React.useState(true);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [salesModalIsOpen, setSalesModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [configureTableIsOpen, setConfigureTableIsOpen] = useState(false);
  const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);

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
      <section className="regsec" style={{paddingBottom:24,overflowX:"hidden",marginTop:"0px"}}>
        <div className="dotholder" style={{padding:32}}>
          <h3>Register the ...</h3>
          <div className={"searchItems"} style={{width:300}}>
            <img src="./images/searchicon.svg" />
            <input
              type="search"
              placeholder={
                "Search for user by name"
              }
            ></input>
          </div>
          <section className={"sectionfilter"}>
            <div className="filterdate">
              <label style={{fontWeight:"bold"}}>Filter:</label>
              <div className="to-fro">
                <input type="text" placeholder="  Level:" />
                <input type="date" placeholder="To" />
              </div>
            </div>
          </section>
          <div className="threed">
            <button style={{paddingLeft:15,paddingRight:15}}>Print Report</button>
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
        <section className="producthead" style={{paddingTop:32}}>
          <UsersTable />
        </section>

        <section className="next" style={{padding:32}}>
          <div className="backfront">
            <img src="./images/back.svg"></img>
            <p>1</p>
            <img src="./images/front.svg"></img>
          </div>
        </section>
      </section>
      <ConfigureUserTableModal
        isOpen={configureTableIsOpen}
        closeModal={setConfigureTableIsOpen}
      />
    </>
  );
};
