import React, { useState } from "react";

export const TableNav = ({ classes }) => {
  const [count, setCount] = useState(1);
  const handleCount = (by) => {
    // if (count === 1 && by === -1) {
    //   setCount(count);
    // } else {
    //   setCount(count + by);
    // }
    if (!(count === 1 && by === -1)) {
      setCount(count + by);
    }
  };
  return (
    <section className={"page-nav " + classes}>
      <div className="backfront">
        <img src="./images/back.svg" onClick={() => handleCount(-1)}></img>
        <p>{count}</p>
        <img src="./images/front.svg" onClick={() => handleCount(1)}></img>
      </div>
    </section>
  );
};
