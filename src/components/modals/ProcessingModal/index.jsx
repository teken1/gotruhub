import React from "react";

export const ProcessingModal = ({ closeModal, isOpen }) => (
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
      <div className="checkoutmodal">
        <div className="checkProcess">
          <h4>Checking out...</h4>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>

      <section className="process">
        <div className="processimg">
          <img src="./images/process.svg" />
        </div>

        <div className="waitProcess">
          <h4>Waiting for confirmation</h4>
          <p>
            Ask <span className="userName">Bright Mba </span>to confirm payment
            from their mobile app
          </p>
        </div>
        <div className="paidDiv">
          <button>Already Paid with cash</button>
        </div>
      </section>
    </div>
  </div>
);
