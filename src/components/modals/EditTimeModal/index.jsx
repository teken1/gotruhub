import React from "react";
export const EditTimeModal = ({ closeModal, isOpen }) => (
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
      style={{ width: 1099, height: 604 }}
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="managemodal">
        <div className="mana">
          <h4>Manage Time</h4>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>

      <section className="twotime">
        <div className="atimes" style={{width:"50%"}}>
          <h3>Manage Time</h3>
          <p>
            Are you sure you want to edit this time? Editing this time means the
            employee’s time in and time out would be modified and it would
            affect when they get to work.
          </p>
        </div>
        <div style={{width:"50%"}}>
          <div className="textas">
            <h6>Reason for time edit</h6>
            <textarea placeholder="Enter you reason for the time edit"></textarea>
          </div>
          <div className="timeholds">
            <div>
              <h5>Time in</h5>
              <div className="clock">
                <input type="time" placeholder="Select date" />
                <img src="./images/clock.svg" />
              </div>
            </div>
            <div>
              <h5>Time out</h5>
              <div className="clock">
                <input type="time" placeholder="Select date" />
                <img src="./images/clock.svg" />
              </div>
            </div>
          </div>
          <div className="changetime">
            <button>Confirm Time Change</button>
          </div>
        </div>
      </section>
    </div>
  </div>
);
