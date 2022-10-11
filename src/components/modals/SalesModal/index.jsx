import { ButtonUnstyled } from "@mui/base";
import React from "react";
export const SalesModal = ({ closeModal, isOpen }) => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      top: 0,
      left: 0,
      display: isOpen ? "flex" : "none",
    }}
    className="center z"
    onClick={() => closeModal(false)}
  >
    <div
      style={{ width: 999, height: 604 }}
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="managemodal">
        <div className="mana">
          <h4>Configure Table</h4>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>

      <section className="registertext">
        <div className="registerbar">
          <input type="text" placeholder="Register" />
        </div>

        <section className="registeredPassword">
          <div className="RegisterAmount">
            <div>
              <input type="date" />
              <img src="./images/see.svg" />
            </div>

            <div>
              <input type="text" placeholder="Name of user " />
              <img src="./images/see.svg" />
            </div>

            <div>
              <input type="text" placeholder="Quantity " />
              <img src="./images/see.svg" />
            </div>

            <div>
              <input type="text" placeholder="T. Amount " />
              <img src="./images/see.svg" />
            </div>
          </div>

          <div className="RegisterAmount">
            <div>
              <input type="text" placeholder="Table name " />
              <img src="./images/see.svg" />
            </div>

            <div>
              <input type="text" placeholder="Department " />
              <img src="./images/see.svg" />
            </div>

            <div>
              <input type="text" placeholder="Unit " />
              <img src="./images/see.svg" />
            </div>
          </div>

          <div className="RegisterAmount">
            <div>
              <input type="text" placeholder="Name of user " />
              <img src="./images/see.svg" />
            </div>

            <div>
              <input type="text" placeholder="Product" />
              <img src="./images/see.svg" />
            </div>

            <div>
              <input type="text" placeholder="Unit price  " />
              <img src="./images/see.svg" />
            </div>
          </div>
        </section>
      </section>

      <section className="saveConfig">
        <div>
          <button>Cancel</button>
          <button>Save Configuration</button>
        </div>
      </section>
    </div>
  </div>
);
