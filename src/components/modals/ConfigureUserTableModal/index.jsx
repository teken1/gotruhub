import React from "react";
import { Input, InputWithVis, Button } from "../..";

export const ConfigureUserTableModal = ({ closeModal, isOpen }) => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      display: isOpen ? "flex" : "none",
      top: 0,
      left: 0,
    }}
    className="center z"
    onClick={() => closeModal(false)}
  >
    <div
      style={{ width: "60vw", height: 600, overflowY: "auto" }}
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        <div className="managemodal">
          <div className="mana">
            <h4>Configure Table</h4>
            <button onClick={() => closeModal(false)} className="bad">
              <img src="./images/bad.svg" />
            </button>
          </div>
        </div>
        <div style={{ padding: "0 32px", marginTop: 40 }}>
          <div
            style={{
              display: "grid", marginBottom:37
            }}
          >
            <input type="text" disabled="disabled" value="Report the service" className="repser"/>
          </div>
          <div
            style={{
              columnGap: 32,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            }}
          >
            <InputWithVis placeholder="Null" value="Name of user" />
            <InputWithVis placeholder="Null" value="Date joined" />
            <InputWithVis placeholder="Null" value="Class/Department" />
            <InputWithVis placeholder="Null" value="Level"/>
            <InputWithVis placeholder="Null" value="Attendance"/>
            <InputWithVis placeholder="Null" value="Total Spent"/>
            <InputWithVis placeholder="Null" />
            <InputWithVis placeholder="Null" />
            <InputWithVis placeholder="Null" />
            <InputWithVis placeholder="Null" />
          </div>
          <div
            className="flex justify-end"
            style={{ columnGap: 24, marginTop: 60 }}
          >
            <Button
              title="Cancel"
              btnStyles={{ padding: "15px 45px" }}
              classes="br-4"
            />
            <Button
              title="Save Configuration"
              classes="bg-grey1 fg-white br-4"
              btnStyles={{ padding: "15px 39px" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
