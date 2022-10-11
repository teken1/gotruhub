import { React, useState } from "react";
import { UsersData } from "../UsersData";

export const UsersRow = ({ sn }) => {
  const [moreIsOpen, setMoreIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const changeMoreState = () => {
    setMoreIsOpen(!editIsOpen);
    console.log("PRecious");
  };
  return (
    <tr>
      <UsersData
        sn={sn}
        joined={"12, Jun 2011"}
        name={"Emeka Julius Favour"}
        department={"Deparment one"}
        level={"Senior"}
        attendance={"90/100"}
        spent={"₦ 123,999.00"}
        action={"More"}
      />
    </tr>
  );
};
