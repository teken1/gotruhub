import { React, useState } from "react";

export const GeneralProduct = ({isExpanded}) => {
  const [salesPerc, setSalesPerc] = useState(25);
  return (
    <section className={!isExpanded ? "general displayBlock" : "general"} style={{padding:"40px 32px"}}>
      <section className="generalProduct">
        <h3>General Product stocks</h3>
        <section className="filtercategory">
          <h4>Filter</h4>
          <div className="selectcategory">
            <div className="salesoption">
              <label>Select category</label>
              <select>
                <option>Select category</option>
                <option>Sales</option>
                <option>Products</option>
              </select>
            </div>

            <div className="salestype">
              <label>Manufacturer</label>
              <input type="text" placeholder="Enter manufacturer" />
            </div>

            <div className="salestype">
              <label>Product</label>
              <input type="text" placeholder="Enter product" />
            </div>
          </div>

          <div className="salestypedate">
            <h3>Filter Date</h3>
            <div className="datefilter">
              <div className="datefilterFrom">
                <label>From</label>
                <input type="date" />
              </div>

              <div className="datefilterFrom">
                <label>To</label>
                <input type="date" />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="alertsales">
        <div className="alert">
          <h4>Percentage Remaining</h4>
          <img src="./images/alert-circle.svg" />
        </div>

        <div className="totalListed">
          <h3>594</h3>
          <p>Total Listed</p>{" "}
        </div>

        {/* <div>
            <img src="./images/level.svg" />
          </div> */}
        <div
          style={{
            width: "83%",
            height: 15,
            backgroundColor: "#DADFDD",
            borderRadius: 10,
          }}
          className="bg-dark7"
        >
          <div
            style={{
              backgroundColor: "#40916C",
              width: `${salesPerc}%`,
              borderRadius: 10,
              height: "100%",
            }}
          />
        </div>
        <div className="line">
          <div className="imgQuatity">
            <img src="./images/greenline.svg" />
            <div div className="sold">
              <p>Qty Remaining</p>
              <p>179 users</p>
            </div>
          </div>

          <div className="imgQuatity">
            <img src="./images/greyline.svg" />
            <div className="sold">
              <p>Quantity Sold</p>
              <p>394 users</p>
            </div>
          </div>
        </div>
        <div className="million">
          <div className="imgQuatity">
            <img src="./images/greyline.svg" />
            <div className="sold">
              <p>Amount made</p>
              <p>
                179,000,000.00<span className="ngn"> NGN</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
