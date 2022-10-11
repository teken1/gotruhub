import React from "react";
export const ReportModal = ({ closeModal, isOpen }) => (
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
      <div className="managemodal">
        <div className="mana">
          <h4>Transaction Details</h4>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>

      <section className="tranactionDetails">
        <section className="detailsRow">
          <p>Time</p>
          <p>Date</p>
          <p>Product</p>
          <p>Quantity</p>
          <p>Unit</p>
          <p>Price per unit</p>
          <p>Total</p>
          <p>Location</p>
        </section>
        <section className="detailsRow">
          <p>12:00 pm</p>
          <p>12, Jun 2011</p>
          <p>Bournvita chocolate</p>
          <p>900</p>
          <p>Sachet</p>
          <p>₦ 23,999.00</p>
          <p>₦ 23,999.00</p>
          <p>Choba, Port Harcourt</p>
        </section>
      </section>

      <section className="Config">
        <div>
          <button onClick={() => closeModal(false)}>Cancel</button>
        </div>
      </section>
    </div>
  </div>
);
