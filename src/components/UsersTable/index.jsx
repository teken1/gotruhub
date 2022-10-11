import React from "react";
import { UsersRow } from "../UsersRow";

export const UsersTable = () => {
  return (
    <table>
      <thead className="headsales">
        <th>S/N</th>
        <th>Name of user</th>
        <th>Date Joined</th>
        <th>Class/Department</th>
        <th>Level</th>
        <th>Attendance</th>
        <th>Total Spent</th>
        <th>Action</th>
      </thead>
      <tbody>
        {[2, 4, 2, 6, 4, 6, 3, 234, 2, 45, 5].map((item, idx) => (
          <UsersRow sn={idx * 1 + 1} />
        ))}
      </tbody>
    </table>
  );
};
