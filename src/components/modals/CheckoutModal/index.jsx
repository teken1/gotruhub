import React from "react";

export const CheckoutModal = ({ closeModal, isOpen }) => (
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
        <div className="mana">
          <h4>Checking out</h4>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>

      <section className="totalchecks">
        <div className="checkedamount">
          <h4>Total Amount</h4>
          <h3>
            1,200,990.00<span className="ngnSpan">NGN</span>
          </h3>
        </div>

        <section className="paidcheckout">
          <h4>Who’s paying for the items?</h4>
          <p>
            Scan their card to select their profile or search for their ID
            number.
          </p>

          <div className="idInput">
            <input type="text" placeholder="Enter their ID number" />
            <button>
              <img src="./images/goodmark.svg" />
            </button>
          </div>

          <div className="approval" style={{ display: "none" }}>
            <div className="userAvatar">
              <div className="avatarHold">
                <img src="./images/avatar.svg" />
              </div>
              <div className="userID">
                <h3>Bright Mba</h3>
                <p>ID: 0909090909</p>
              </div>
            </div>
            <div className="approveButton">
              <button>Approve</button>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
);
