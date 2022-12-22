import { React, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment/moment";

export const ProfileDetail = ({uDob,uDreg,uEmail,uGender
,uIdNo,uName,uPic,uRole,uSus,suspendDate
}) => {

return (
  <section
    role="profile-details"
    style={{fontSize:14,
      marginTop: 46,
      borderBottom: "1px solid rgba(218, 223, 221, 1)",
      paddingBottom: 40,
    }}
  >
    <h3 className="profileDetails">Profile Details</h3>
    <div
      style={{fontSize:14,
        border: "1px solid rgba(213, 215, 228, 1)",
        padding: "31px 50px",
        marginTop: 32,
      }}
      className="br-8 flex"
    >
      <div
        className="flex-col align-center"
        style={{fontSize:14,
          paddingRight: 72,
          width: "fit-content",
          borderRight: "1px solid rgba(213, 215, 228, 1)",
        }}
      >
        <div>
          <img src={uPic} width="100"  style={{borderRadius:"100px"}}/>
        </div>

        <p className="f16 fg-grey1 fw700" style={{fontSize:14, marginBottom: 10 }}>
          {uName}
        </p>
        <p className="f12" style={{fontSize:14, backgroundColor: "#EDFFF7", padding: 3, color:"#000", fontWeight:600 }}>
          {uEmail}
        </p>
      </div>
      <section style={{ marginLeft: 72 }} className="flex-col justify-between">
        <ul
          className="gridTemplateColumns"
          // style={{
          //   display: Grid,
          //   gridTemplateColumns: "1fr 1fr",
          //   columnGap: "7vw",
          //   rowGap: 24,
          // }}
        >
          <Li prty="Gender" value={uGender} />
          <Li prty="Position/Role" value={uRole} />
          <Li prty="Personal ID" value={uIdNo} />
        </ul>

        <ul
          className="gridTemplateColumns thirdLi"
          // className="flex flex-wrap thirdLi"
          // style={{ columnGap: "7vw", rowGap: 24 }}
        >
          <Li prty="Date of Birth" value={uDob} />
          <Li prty="Date Joined" value={uDreg} />
          {uSus == "suspend" ?
          <Li value={"This user is suspended till "+suspendDate} />
          :<Li value={"This user is active"} />
          }
        </ul>
      </section>
    </div>
  </section>
);
}

const Li = ({ prty, value }) => (
  <li>
    <h4 className="f12 fg-dark2" style={{ fontWeight: "400", marginBottom: 0 }}>
      {prty}
    </h4>
    <p className="fg-dark1 fw500">{value}</p>
  </li>
);