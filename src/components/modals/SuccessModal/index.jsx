import { display } from "@mui/system";
import React from "react";
import { CartRow } from "../../CartRow";

export const SuccessModal = ({ closeModal, isOpen }) => (
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
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <section className="successfulModal">
        <section className="successHolder">
          <div className="successful">
            <img src="./images/success.svg" />
          </div>

          <div className="paymentReceipt">
            <h3>Payment Complete</h3>
            <p>Proceed to print receipt and attend to other customers. </p>
          </div>
        </section>
        <div className="proceedSuccess">
          <button
            onClick={() =>
              closeModal(false) && <CartRow /> ? (display = "none") : ""
            }
          >
            Proceed
          </button>
        </div>
      </section>
    </div>
  </div>
);
