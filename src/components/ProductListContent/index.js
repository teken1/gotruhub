import React from "react";
import { Link } from "react-router-dom";
import { ProductTable } from "../ProductTable";
import { Productflex } from "../Productflex";
import { ServiceList } from "../ServiceList";
import { SalesFilter } from "..";

export const ProductListContent = () => {
  const [isExpanded, setExpanded] = React.useState(true);
  const [toggle, setToggle] = React.useState("productlist");
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
            <ServiceList />
          </section>
        )}
        {toggle == "productlist" ? (
          <section className={!isExpanded ? "productrow" : "productrow hide-x-overflow"} style={{paddingLeft:32, paddingRight:32}}>
            <section className="productholder">
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
              <ProductTable isExpanded={isExpanded} />
            </section>
          </section>
        ) : (
          <SalesFilter isExpanded={isExpanded} />
        )}
      </section>
    </main>
  );
};
