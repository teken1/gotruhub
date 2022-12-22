import { React, useEffect, useState } from "react";
import { Input, Select, Button, ProfileDetail } from "../..";
import { GoBack } from "../../Helpers/GoBack";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment/moment";
export const CustomerProfileContent = () => {
    
  const navigate = useNavigate();
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [salesModalIsOpen, setSalesModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [uName, setUName] = useState("");
  const [uDept, setUDept] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [uPic, setUPic] = useState("");
  const [uGender, setUGender] = useState("");
  const [uRole, setURole] = useState("");
  const [uIdNo, setUIdNo] = useState("");
  const [uDob, setUDob] = useState("");
  const [uDreg, setUDreg] = useState("");
  const [suspendDate, setSuspendDate] = useState("12, jun 2022");
  const [uSus, setUSus] = useState("");
  const [uPhone, setUPhone] = useState("");
  const [uAddr, setUAddr] = useState("");

  const notify = (message) => toast(message);

  const myId = searchParams.get('id');
  const token = localStorage.getItem("token");
  const domagent = localStorage.getItem("agent");
  const domain = JSON.parse(domagent).domain;
  const myHeaders = new Headers();
    myHeaders.append("domain", domain);
    myHeaders.append("AUTHORIZATION", "Bearer "+token);

    const getUserProfile = async () => {
    
      const uresp = await fetch(
        "https://gotruhubapi.herokuapp.com/api/v1/users/"+myId,
        {
          method: "GET",
          headers: myHeaders,
          redirect: 'follow',
        }
      );
      const udata = await uresp.json();
      const rUdata = udata?.data;
      const dreg = moment(rUdata?.createdAt).format('MMM Do YYYY, h:mm:ss a');
      setUName(rUdata.firstName + " " + rUdata.lastName);
      setUDept(rUdata.department);
      setUDob(rUdata.dateOfBirth);
      setUDreg(dreg);
      setUPic(rUdata.avatar);
      setUEmail(rUdata.email);
      setUGender(rUdata.gender.charAt(0).toUpperCase() + rUdata.gender.slice(1));
      setURole(rUdata.role.charAt(0).toUpperCase() + rUdata.role.slice(1));
      setUIdNo(rUdata._id);
      setUPhone(rUdata.phone);
      setUAddr(rUdata.address);
      if (udata.error) {
        notify(udata.error.message);
        return;
      }
      return;
    }

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };

useEffect(()=> {
  ( 
    async function renderReport() {
    await getUserProfile();
  }
  )();
},[])
  return(
  <section>
    <GoBack/>
    <section style={{ width: "100%" }}>
      <div className="bg-white" style={{ padding: "40px 32px" }}>
        <div
          className="flex justify-between align-center"
          style={{
            paddingBottom: 24,
            borderBottom: "1px solid rgba(218, 223, 221, 1)",
          }}
        >
          <h1
            style={{
              fontWeight: "700",
              color: "rgba(25, 32, 29, 1)",
            }}
            className="f20 font-std"
          >
            {uName}
          </h1>
          <div className="flex" style={{ columnGap: 15 }}>
            <Button onClick={() => navigate('/customer-report/?id='+uIdNo)} title="Customer Records" />
            <Button
              classes="bg-primary1 fg-white resetPasswordButton"
              title="Resend Password"
            />
          </div>
        </div>
        <ProfileDetail uDob={uDob} uDreg={uDreg}uEmail={uEmail}uGender={uGender}uIdNo={uIdNo}uName={uName}uPic={uPic}uRole={uRole}uSus={uSus}suspendDate={suspendDate}/>
        <section
          role="profile-details"
          style={{
            marginTop: 46,
            borderBottom: "1px solid rgba(218, 223, 221, 1)",
            paddingBottom: 40,
          }}
        >
          <h2 className="f16 fg-dark1 font-std fw600">Contact Information</h2>
          <div
            style={{
              border: "1px solid rgba(213, 215, 228, 1)",
              padding: "31px 50px",
              marginTop: 32,
            }}
            className="br-8 flex"
          >
            <ul
              className="flex flex-wrap"
              style={{ columnGap: "7vw", rowGap: 24, paddingLeft: 12 }}
            >
              <Li prty="Phone Number" value={uPhone} idx={0} />
              <Li prty="Email address" value={uEmail} />
              <Li prty="Home Address" value={uAddr} idx={2} />
            </ul>
          </div>
        </section>
      </div>
    </section>
  </section>
  );
};

const Li = ({ prty, value, idx }) => (
  <li
    style={{
      paddingRight: "5vw",
      borderLeft: `1px solid ${
        idx == 0 ? "transparent" : "rgba(213, 215, 228, 1)"
      }`,
      paddingLeft: 24,
    }}
  >
    <h4
      className="f12 fg-dark2"
      style={{
        fontWeight: "400",
        marginBottom: 8,
      }}
    >
      {prty}
    </h4>
    <p className="fg-dark1 fw500 contactAddress">{value}</p>
  </li>
);
