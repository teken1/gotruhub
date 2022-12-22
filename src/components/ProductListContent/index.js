import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductTable } from "../ProductTable";
import { Productflex } from "../Productflex";
import { ServiceList } from "../ServiceList";
import { SalesFilter } from "..";
import toast, { Toaster } from "react-hot-toast";
import { RegisterUserModal } from "..";

export const ProductListContent = () => {
  const [isExpanded, setExpanded] = React.useState(true);
  const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState("productlist");
  const [searchValue, setSearchValue] = React.useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filterValue2, setFilterValue2] = useState("");
  return (
    <main>
      <Productflex
        setExpanded={setExpanded}
        isExpanded={isExpanded}
        toggle={toggle}
        setToggle={setToggle}
      />
      <section className={!isExpanded && "gridproduct"}>
        {!isExpanded && (
          <section>
            {/* <OldServiceList /> */}
            <ServiceList />
          </section>
        )}
        {toggle == "productlist" ? (
          <section className={!isExpanded ? "productrow" : "productrow hide-x-overflow"} style={{}}>
            <section className="productholder" style={{paddingLeft:32, paddingRight:32}}>
              <div className="searchflexholds">
                <div className="searchflex">
                  <h3>Product List</h3>
                  <div className={isExpanded ? "searchItems height-50":"searchItems"}>
                    <img src="./images/searchicon.svg" />
                    <input
                      type="search"
                      placeholder={
                        "Search for items by name, category, manufacturer, "
                      }
                      value={searchValue}
                      onInput={(e) => setSearchValue(e.target.value)}
                    ></input>
                  </div>
                  <div className={isExpanded ? "sort" : "hide"}>
                    <label>Sort by :</label>
                    <select>
                      <option>All</option>
                      <option>Buy</option>
                      <option>Sales</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            <section className="producthead">
              <ProductTable isExpanded={isExpanded} searchValue={searchValue} />
            </section>
          </section>
        ) : (
          <SalesFilter isExpanded={isExpanded} filterValue={filterValue} filterValue2={filterValue2} setFilterValue={setFilterValue}
          setFilterValue2={setFilterValue2}
          />
        )}
      </section>
    </main>
  );
};
