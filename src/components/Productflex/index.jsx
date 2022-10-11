import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SalesRegister } from "..";

export const Productflex = ({ setExpanded, isExpanded, setToggle, toggle }) => {
  return (
    <section className="productflex">
      <div className="salesLink">
        <div
          onClick={() => setToggle("productlist")}
          className={
            toggle === "productlist" ? "hovergreen pointer" : "pointer sales"
          }
        >
          Product List
        </div>
        <div
          onClick={() => setToggle("salesregister")}
          className={
            toggle === "salesregister" ? "pointer hovergreen" : "sales pointer"
          }
        >
          Sales Register
        </div>
      </div>
      <div style={{marginTop:"-22px"}}>
        {isExpanded ? (
          <button style={{
            border: "1px solid #19201D",
            borderRadius: "4px",
          marginBottom:16,}}
            className="addProduct"
            onClick={() => setExpanded(!isExpanded)}
          >
            <div className="product">
              <div>
                <img style={{verticalAlign:"bottom"}} src="./images/plusSign.svg" />
              </div>
              <p style={{fontSize:17}}> Add New product</p>
            </div>
          </button>
        ) : (
          <button
            className="addProduct"
            onClick={() => setExpanded(!isExpanded)}
          >
            <div className="products">
              <div>
                <img src="./images/expand.svg" />
              </div>
              <p> Expand</p>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};
