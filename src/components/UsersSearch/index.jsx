import { React, useState, useEffect } from "react";
import { UsersData } from "../UsersData";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment/moment";

export const UsersSearch = ({valueToSearch}) => {
  const [moreIsOpen, setMoreIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const searchValue = valueToSearch;
  const changeMoreState = () => {
    setMoreIsOpen(!editIsOpen);
    console.log("PRecious");
  };
  const notify = (message) => toast(message);
  
  const token = localStorage.getItem("token");
  const domAgents = JSON.parse(localStorage.getItem("agent"));
  const domain = domAgents.domain;
  const myHeaders = new Headers();
  myHeaders.append("domain", domain);
  myHeaders.append("AUTHORIZATION", "Bearer "+token);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const getUserList = async () => {
    
    const resp = await fetch(
      "https://gotruhubapi.herokuapp.com/api/v1/users", requestOptions);
    const data = await resp.json();
    if (data.error) {
      notify(data.error.message);
      return;
    }
    const myData = JSON.stringify(data?.data);
    return myData;
  }
useEffect(()=>{
  ( 
    async function renderUsers() {
    const lists = await getUserList();
    const arrayLists = JSON.parse(lists);
    const dataLists = arrayLists.filter(filteredUser => {
        return (filteredUser.firstName.includes(searchValue) || filteredUser.lastName.includes(searchValue));
    });
    setUsersData(dataLists);
    console.log(dataLists);

  }
  )();
},
[usersData])
  return (
    <table style={{width:"100%",minHeight:"300px"}}>
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
    { usersData.length !== 0 ? 
    usersData.slice(0).reverse().map((user,iex) => {
      const dateJoined = moment(user?.createdAt).format('MMM Do YYYY, h:mm:ss a');
      const name = user?.firstName + " " + user?.lastName;
      const totalSpent = user?.wallet?.totalSpent;
      const cid = user?._id
      return(
        <tr key={iex}>
          <td style={{ width: 20 }}>{(iex + 1) * 1}</td>
          <td>{name}</td>
          <td>{dateJoined}</td>
          <td>{user?.department === undefined ? "-": user?.department}</td>
          <td>{user?.level === undefined ? "-": user?.level}</td>
          <td>{user?.totalAttendance === undefined ? "-":user?.totalAttendance}</td>
          <td>{totalSpent === undefined ? "₦0.00":"₦" + totalSpent}</td>
          <td style={{ position: "relative" }}>    
            <UsersData
              cid={cid}
              action={"More"}
            />
          </td>
        </tr>
        )
    }):
        <tr >
            <td colSpan={8} align="center">No Data Found</td>
        </tr>
  }
      </tbody>
    </table>
  );
};
