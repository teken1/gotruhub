import React from "react";
import { Link } from "react-router-dom";
import { Identity } from "../../Identity";

export const Sequence = ({ sn }) => {
  return (
    <tr>
      <Identity
        sn={sn}
        names={"Emmanuel Joseph"}
        percent={"90/100"}
        remark={"Fair"}
        depart={"Julius Benson"}
        contact={"+234 90 888 9898"}
        view={"View"}
      />
    </tr>
  );
};
