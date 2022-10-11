import React from "react";

export const Arrival = ({ TimeIn, newTimeIn }) => {
  return (
    <section className="updatedClock">
      <div className="updatedClockHolder">
        <div className="timein">
          <div>
            <img src="./images/caution.svg" />
          </div>
          <div className="first-child">Clock In Time</div>
          <div className="timer">{TimeIn}</div>
        </div>

        <div className="timein">
          <div className="first-child">Updated Clock In Time</div>
          <div className="timer">{newTimeIn}</div>
          <div>
            <img src="./images/chat.svg" />
          </div>
        </div>
        <div className="approved">
          <p>Approved by Precious</p>
        </div>
      </div>
    </section>
  );
};
