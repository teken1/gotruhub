import React from "react";

export const Departure = ({ TimeOut, newTimeOut }) => {
  return (
    <section className="updatedClock">
      <div className="updatedClockHolder">
        <div className="timein">
          <div>
            <img src="./images/caution.svg" />
          </div>
          <div className="first-child">Clock Out Time</div>
          <div className="timer">{TimeOut}</div>
        </div>

        <div className="timein">
          <div className="first-child">Updated Clock Out Time</div>
          <div className="timer">{newTimeOut}</div>
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
