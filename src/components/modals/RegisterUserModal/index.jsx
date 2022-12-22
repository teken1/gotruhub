import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationStatusModal } from "../RegistrationStatusModal";
import { Input, FlexRow, Select } from "../..";
import toast, { Toaster } from "react-hot-toast";
import { AgentContext } from "../../../contexts";
import axios from "axios";
import { render } from "@testing-library/react";
import QRCode from "react-qr-code";
export const RegisterUserModal = ({ closeModal, isOpen }) => {
  const [hideCalender, setHideCalender] = useState(false);
  const calenderRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");
  const [signature, setSignature] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [managerPhone1, setManagerPhone1]= useState("");
  const [managerPhone2, setManagerPhone2]= useState("");
  const [domain, setDomain] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [signLink, setSignLink] = useState("");
  const [passSrc, setPassSrc] = useState("");
  const [signSrc, setSignSrc] = useState("");
  const [cloudDatas, setCloudDatas] = useState("");
  const [QrUrl, setQrUrl] = useState("");
  const [regId, setRegId] = useState("");

  const navigate= useNavigate();
  
  const url = "https://api.cloudinary.com/v1_1/gotruhub/image/upload";
  const docs = [photo, signature, QrUrl];
  const formData = new FormData();

  const passportRef = useRef();
  const signatureRef = useRef();

  const uploadPassport = () => {
    passportRef?.current?.click();
  };
  const uploadSignature = () => {
    signatureRef?.current?.click();
  };
  const handleImageChange = (image, kind) => {
        setPhoto(image[0]);
        const preview0 = document.getElementById("imgVal0");
        const file = image[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
          // convert image file to base64 string
          setPassSrc(reader.result);
          preview0.src = reader.result;
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
  };
  const handleSignChange = (image, kind) => {
        setSignature(image[0]);
        const preview1 = document.getElementById("imgVal1");
        const file = image[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
          // convert image file to base64 string
          setSignSrc(reader.result);
          preview1.src = reader.result;
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
  };

  const handleQrUrl =  () => {
    
      const svg = document.querySelector("#qrcode").innerHTML;
      const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      const doURL = window.URL || window.webkitURL || window;
      const svgurl = URL.createObjectURL(blob);
      const image = document.querySelector("#qrImg");
      image.src = svgurl;
      console.log(blob);
      console.log(svgurl);
      const myFile = new File([blob], 'qrcode.jpeg', {
        type: blob.type,
    });
    
    console.log(myFile);
      setQrUrl(myFile);
    
    
  }

  const user = {
    firstName,
    lastName,
    idNumber,
    phone,
    email,
    gender,
    dateOfBirth: date,
    managerPhone1,
    managerPhone2,
    department,
    level
  };

  
  // console.log(user);
  const notify = (message) => toast(message);

  async function register() {
    
    if (
      !firstName ||
      !lastName ||
      !idNumber ||
      !phone ||
      !email ||
      !gender ||
      !date ||
      !photo ||
      !managerPhone1 ||
      !managerPhone2 ||
      !signature  ||
      !level ||
      !department
    ) {
      notify("All Fields Are Required");
      return;
    }  
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("AUTHORIZATION", "Bearer "+token);
   
    const myRes = await axios.post("https://gotruhubapi.herokuapp.com/api/v1/auth/members", user, {headers: {"domain":domain}
  }).then(res => {
    console.log(res?.data?.user?._id);
    const myId = res?.data?.user?._id;
    return myId;
  })
  .catch(err => {
    notify(`${err?.response?.data?.error?.message}`);
    return;
  });
  if(myRes === undefined || myRes === "" || myRes === null) {
    return;
  } else {
    
    let dat = "";
    let cloudDat = "";

    for (let i = 0; i < docs.length; i++) {
      let file = docs[i];
      formData.append("file", file);
      formData.append("upload_preset", "zfwwazfb");
  
      const theValues = fetch(url, {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })
        .then((cloudData) => {
          cloudDat = JSON.parse(cloudData).secure_url + ",";
          return cloudDat;
        });
        dat += await theValues;
      }
      const datValues = dat.split(",");
      const a = datValues;
      const avatar = a[0];
      const qrcode = a[2];
      const signature = a[1]; 
      const IdNo = myRes;
      console.log(IdNo);
      console.log(a);
      const raw = {
        "avatar":avatar,
        "qrcode":qrcode,
        "signature":signature,
    
      }
        
      await axios.patch("https://gotruhubapi.herokuapp.com/api/v1/users/images/"+IdNo, raw).then(resd => {
        console.log(resd);
      })
      .catch(err => {
        console.log(`${err}`);
        return;
      });
    setEmail("");
    setFirstName("");
    setLastName("");
    setIdNumber("");
    setDate("");
    setGender("");
    setPhone("");
    setPhoto(null);
    setSignature(null);
    setManagerPhone1("")
    setManagerPhone2("");
    setLevel("");
    setDepartment("");

    // closeModal(false);
    toast.success("Registration successful!");
  }
}

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('agent'));
  setAgentEmail(items.email);
  setDomain(items.domain);
},
[]);
  return (
    <div
      style={{
        top:0,
        left: 0,
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        display: isOpen ? "flex" : "none",
      }}
      className="center z"
      onClick={() => closeModal(false)}
    >
      <div
        style={{ width: 999,height:"100%",overflowY:"scroll" }}
        className="bg-white z "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="managemodal">
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid rgba(145, 64, 64, 1)",
                padding: "16px",
                color: "rgba(145, 64, 64, 1)",
              },
            }}
          />
          <div className="mana">
            <h4>Register user</h4>
            <button onClick={() => closeModal(false)} className="bad">
              <img src="./images/bad.svg" />
            </button>
          </div>
        </div>
        <div className="gridfive" style={{ columnGap: 55 }}>
          <Input
            title="First Name"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            title="Last Name"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Input
            title="ID Number"
            placeholder="Enter ID Number"
            value={idNumber}
            onChange={async (e) => {
              setIdNumber(e.target.value);
              await setQrValue("https://gotruhub.com/?d="+domain+"&idNo="+idNumber + "&em" + email);
              await handleQrUrl();
            }}
          />
          <Input
            title="Email address"
            placeholder="Enter Email address"
            value={email}
            onChange={async (e) => {
              setEmail(e.target.value);
              await setQrValue("https://gotruhub.com/?d="+domain+"&idNo="+idNumber + "&em" + email);
              await handleQrUrl();
            }}
          />
          <Input
            title="Phone Number"
            placeholder="Enter Phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <div className="gender">
            <Select
              title="Gender"
              placeholder="Select Gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" }
              ]}
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <div>
              <label>Date</label>
              <div
                className="calendaricon pointer hover"
                onClick={() => {
                  calenderRef.current?.focus();
                  calenderRef.current?.click();
                }}
              >
                <input
                  type="date"
                  placeholder="Select Date"
                  // className="hide"
                  ref={calenderRef}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
              {[
                {
                  title: "Passport",

                  action: uploadPassport,
                  delete: () => setPhoto(null),
                  src: passSrc
                },
                {
                  title: "Signature",

                  action: uploadSignature,
                  delete: () => setSignature(null),
                  src: signSrc
                }
              ].map((type, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (!docs[idx]) type.action();
                  }}
                  style={{
                    border: "1px dashed #D5D7E4",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    marginBottom: 24,
                    flex: 1,
                    height: 100
                  }}
                  className={"hover center " + (!docs[idx] && "pointer")}
                >
                  <div className="center" style={{ position: "relative" }}>
                    <h3
                      style={{
                        marginBottom: 8,
                        color: "rgba(111, 121, 117, 1)",

                        width: 170
                      }}
                      className="f12"
                    >
                      {docs[idx] ? docs[idx]?.name : type.title + " (jpg, png, jpeg)"}
                    </h3>
                    <div style={{ position: "absolute", left: -50 }}>
                      {docs[idx] ? (
                        <img src={type.src} width="40" style={{borderRadius:100}} />
                      ) : (
                        <img src="/images/upload.svg" />
                      )}
                    </div>
                    {docs[idx] && (
                      <div
                        onClick={type.delete}
                        // style={{ position: "absolute", right: -50 }}
                        className="pointer"
                      >
                        <img src="/images/Delete.svg" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            {/* refs */}
            <input
              accept=".jpg,.jpeg,.png"
              type="file"
              ref={passportRef}
              className="passUpload"
              onChange={(e) => handleImageChange(e.target.files, "pas")}
              style={{ display: "none" }}
            />
            <input
              accept=".jpg,.jpeg,.png"
              type="file"
              ref={signatureRef}
              className="signUpload"
              onChange={(e) => handleSignChange(e.target.files, "sig")}
              style={{ display: "none" }}
            />
            <input type="hidden" className="imgValues" value={cloudDatas}
            />
            
          <Input
            title="Class / Department"
            placeholder="Enter Class / Department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />
          <Input
            title="Level"
            placeholder="Enter Level"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
        </div>
        <div className="gridfive" style={{ columnGap: 55, marginTop:0, display:"block" }}>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 4,
              marginBottom: 24,
              flex: 1,
            }}
            className="hover center pointer"
          >
            <div className="center" style={{ position: "relative" }}>  
              <div id="qrcode" style={{ background: 'white', padding: '16px',display:"none" }}>
                  <QRCode 
                    size={150}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrValue}
                    viewBox={`0 0 150 150`}
                   />

              </div>
              <img src="" id="qrImg" />
            </div>
          </div>
        </div>
        <div className="managemodal">
          <div className="mana">
            <h4>Manager's Details</h4>
          </div>
        </div>
        <div className="gridfive" style={{ columnGap: 55 }}>  
          <Input
            title="Phone number 1"
            placeholder="Enter phone number"
            value={managerPhone1}
            onChange={(e) => {
              setManagerPhone1(e.target.value);
            }}
          />
          <Input
            title="Phone number 2"
            placeholder="Enter phone number"
            value={managerPhone2}
            onChange={(e) => {
              setManagerPhone2(e.target.value);
            }}
          />
        </div>

        <section className="cancelbuttons">
          <div className="canceluser">
            <button onClick={() => closeModal(false)}>Cancel</button>
            <button onClick={register}>Register User</button>
          </div>
        </section>
      </div>
    </div>
  );
};
