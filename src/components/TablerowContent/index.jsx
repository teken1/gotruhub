import React from "react";
import { Tablerecords } from "../Tablerecords";

export const TablerowContent = () => {
  return (
    <>
      <tr>
        <Tablerecords
          day={"Thur, 18 Jun 2021"}
          timein={"09:33 am"}
          timeout={"09:33 am"}
          more={"See more"}
          hours={"09:54 hr"}
        />
      </tr>
      <tr>
        <Tablerecords
          day={"Thur, 18 Jun 2021"}
          timein={"09:33 am"}
          timeout={"09:33 am"}
          more={"See more"}
          hours={"09:54 hr"}
        />
      </tr>
      <tr>
        <Tablerecords
          day={"Thur, 18 Jun 2021"}
          timein={"09:33 am"}
          timeout={"09:33 am"}
          more={"See more"}
          hours={"09:54 hr"}
        />
      </tr>
      <tr className="weekrecords">
        <td colspan={5} className="weekends">
          <span className="weekblack">Weekend</span> Sat, Jun 14th & Jun 13th
          2021
        </td>
      </tr>
      <tr>
        <Tablerecords
          day={"Thur, 18 Jun 2021"}
          timein={"09:33 am"}
          timeout={"09:33 am"}
          more={"See more"}
          hours={"09:54 hr"}
        />
      </tr>
      <tr>
        <Tablerecords
          day={"Thur, 18 Jun 2021"}
          timein={"09:33 am"}
          timeout={"09:33 am"}
          more={"See more"}
          hours={"09:54 hr"}
        />
      </tr>
      <tr>
        <Tablerecords
          day={"Thur, 18 Jun 2021"}
          timein={"09:33 am"}
          timeout={"09:33 am"}
          more={"See more"}
          hours={"09:54 hr"}
        />
      </tr>
    </>
  );
};
