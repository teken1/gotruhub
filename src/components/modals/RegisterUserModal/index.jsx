import React, { useState, useRef } from "react";
import { Input, FlexRow } from "../..";
import toast, { Toaster } from "react-hot-toast";
export const RegisterUserModal = ({ closeModal, isOpen }) => {
  const [hideCalender, setHideCalender] = useState(false);
  const calenderRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [passport, setPassport] = useState("");
  const [signature, setSignature] = useState("");
  
  const docs = [passport, signature];

  const passportRef = useRef();
  const signatureRef = useRef();

  const uploadSignature = () => {
    passportRef?.current?.click();
  };
  const uploadPassport = () => {
    signatureRef?.current?.click();
  };
  const handleImageChange = (image, kind) => {
    if (image[0]) {
      if (kind == "pas") {
        setPassport(image[0]);
      } else {
        setSignature(image[0]);
      }
    }
  };

  const user = {
    firstName,
    lastName,
    idNumber,
    phone,
    email,
    gender,
    dateOfBirth: date,
    passport,
    signature,
  };

  console.log(user);
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
      !passport ||
      !signature 
    ) {
      notify("All Fields Are Required");
    }

    const response = await fetch(
      "https://gotruhub-api.herokuapp.com/api/v1/auth/members",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json" },
      }
    );

    const data = await response.json();
    if (data.error) {
      notify(data.error.message);
      return;
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setIdNumber("");
    setDate("");
    setGender("");
    setPhone("");
    setPassport("");
    setSignature("");

    closeModal(false);
    // notify("Registration Successful");

    console.log(data);
  }

  console.log(calenderRef);

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
            onChange={(e) => {
              setIdNumber(e.target.value);
            }}
          />
          <Input
            title="Email address"
            placeholder=" Enter Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
            <Input
              title="Gender"
              placeholder="Select Gender"
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
                {/* <input type="date" placeholder="Select Date" /> */}

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

                <img src="./images/calendar.svg" />
              </div>
            </div>
          </div>
              {[
                {
                  title: "Passport",

                  action: uploadPassport,
                  delete: () => setPassport(null)
                },
                {
                  title: "Signature",

                  action: uploadSignature,
                  delete: () => setSignature(null)
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
                        <img src="/images/pdf-file .svg" />
                      ) : (
                        <img src="/images/upload.svg" />
                      )}
                    </div>
                    {docs[idx] && (
                      <div
                        onClick={type.delete}
                        style={{ position: "absolute", right: -50 }}
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
              onChange={(e) => handleImageChange(e.target.files, "pas")}
              style={{ display: "none" }}
            />
            <input
              accept=".jpg,.jpeg,.png"
              type="file"
              ref={signatureRef}
              onChange={(e) => handleImageChange(e.target.files, "sig")}
              style={{ display: "none" }}
            />
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
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            title="Phone number 2"
            placeholder="Enter phone number"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>

        <section className="cancelbuttons">
          <div className="canceluser">
            <button>Cancel</button>
            <button onClick={register}>Register User</button>
          </div>
        </section>
      </div>
    </div>
  );
};
