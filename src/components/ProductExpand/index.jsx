import React from "react";
import { Link } from "react-router-dom";

export const ProductExpand = () => {
  return (
    <section className="productflex">
      <div className="salesLink">
        <div className="sales">
          <Link to="/">Product List</Link>
        </div>
        <div className="sales">
          <Link to="/">Sales Register</Link>
        </div>
      </div>
      <div>
        <button className="addProduct">
          <div className="products">
            <div>
              <img src="./images/expand.svg" />
            </div>
            <p> Expand</p>
          </div>
        </button>
      </div>
    </section>
  );
};
