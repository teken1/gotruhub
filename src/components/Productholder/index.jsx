import React from "react";
import { ProductTableDuplicate } from "../ProductTableDuplicate";

export const Productholder = () => {
  return (
    <section>
      <section className="productholder">
        <div className="searchflexholds">
          <div className="searchflex">
            <h3>Product List</h3>
            <div className="searchinput">
              <div className="holdericon">
                <img src="./images/searchicon.svg" />
                <input type="search" placeholder="Search for items"></input>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="duplicateholder">
        <ProductTableDuplicate />
      </div>
    </section>
  );
};
