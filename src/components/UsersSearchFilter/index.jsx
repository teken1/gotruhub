import { React, useState, useEffect } from "react";
import { UsersData } from "../UsersData";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment/moment";

export const UsersSearchFilter = ({valueToSearch,valueToFilter,valueToFilter2,typeOfFilter}) => {
  const [moreIsOpen, setMoreIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
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
    const datLists = JSON.parse(lists);
    const arrayLists = datLists.filter(filteredUser => {
        return (filteredUser.firstName.includes(valueToSearch) || filteredUser.lastName.includes(valueToSearch));
    });
    
    if (typeOfFilter === "level" && valueToFilter !== "") { 
      const theLists = arrayLists.map((obj) => {
        if (obj.level !== undefined) return obj;
        return { ...obj,
          level: ""
        }
      });
      const dataLists = theLists.filter(filterUser => {
        return (filterUser.level.includes(valueToFilter));
    });
    setUsersData(dataLists);
    } 
    else if (typeOfFilter === "date" && valueToFilter !== "" && valueToFilter2 !== "") { 
        const startDate = new Date(valueToFilter).toJSON();
        const endDate = new Date(valueToFilter2).toJSON().slice(0,10)+"T23:59:59.000Z";
        const dataLists = arrayLists.filter(filterdUser => {
             return (filterdUser.createdAt >= startDate &&
             filterdUser.createdAt <= endDate);
         });
         setUsersData(dataLists);
     }
    else if (typeOfFilter === "date" && valueToFilter !== "" && valueToFilter2 === "") { 
         const startDate = new Date(valueToFilter).toJSON();
         const endDate = new Date().toJSON().slice(0,10)+"T23:59:59.000Z";
        const dataLists = arrayLists.filter(filterdUser => {
             return (filterdUser.createdAt >= startDate &&
             filterdUser.createdAt <= endDate);
         });
         setUsersData(dataLists);
     }
    else if (typeOfFilter === "date" && valueToFilter === "" && valueToFilter2 !== "") { 
        const startDate = new Date("2022-01-01").toJSON();
        const endDate = new Date(valueToFilter2).toJSON().slice(0,10)+"T23:59:59.000Z";
    const dataLists = arrayLists.filter(filterdUser => {
         return (filterdUser.createdAt >= startDate &&
         filterdUser.createdAt <= endDate);
     });
         setUsersData(dataLists);
     }
    else if (typeOfFilter === "dept" && valueToFilter !== "") { 
      const theLists = arrayLists.map((obj) => {
        if (obj.department !== undefined) return obj;
        return { ...obj,
          department: ""
        }
      });
      console.log(arrayLists);
      console.log(theLists);
      const dataLists = theLists.filter(filterUser => {
        return (filterUser.department.includes(valueToFilter));
    });
    setUsersData(dataLists);
    }  else {
        setUsersData(arrayLists);
    }

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
      const cid = user?._id;
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
