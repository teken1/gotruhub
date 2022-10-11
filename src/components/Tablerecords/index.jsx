import { React, useState } from "react";

export const Tablerecords = ({ day, timein, timeout, hours }) => {
  const [see, setsee] = useState(false);

  const seeLess = () => {
    setsee(!see);
    console.log("Precious");
  };

  return (
    <>
      <td className="temp">{day}</td>
      <td className="redbg">
        <div className="redarr">
          <span>
            <img src="./images/arrowIn.svg" />
            {timein}
          </span>
        </div>
        <div className={`locate ${!see && "hide"}`}>
          <img src="./images/location.svg" />
          <p>16, Joseph street, Ikeja Lagos.</p>
        </div>
      </td>
      <td className="greenBg">
        <div className="greenarr">
          <span>
            <img src="./images/arrowOut.svg" />
            {timeout}
          </span>
        </div>
        <div className={`locate ${!see && "hide"}`}>
          <img src="./images/location.svg" />
          <p>16, Joseph street, Ikeja Lagos.</p>
        </div>
      </td>
      <td className="temp">{hours}</td>
      <td>
        <button
          className={"more-or-less " + (see ? "seeLess" : "seeMore")}
          onClick={seeLess}
        >
          {see ? "See less" : "See more"}
        </button>
      </td>
    </>
  );
};
