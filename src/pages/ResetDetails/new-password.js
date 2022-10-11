import { Link } from "react-router-dom";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Details({}) {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [encrypted, setEncrypted] = useState(true);

  const body = {
    email
  };
  console.log(body);
  const notify = (message) => toast(message);

  async function createPass() {
    if (!email) {
      notify("Email is required!");
      return;
    }
    const resp = await fetch(
      "https://gotruhub-api.herokuapp.com/api/v1/auth/agents/login",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" }
      }
    );
    const data = await resp.json();
    if (data.error) {
      notify(data.error.message);
      return;
    }

    localStorage.setItem("token", data.token);

    navigate("/dashboard");
  }

  return (
    <section className="login">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid rgba(145, 64, 64, 1)",
            padding: "16px",
            color: "rgba(145, 64, 64, 1)"
          }
        }}
      />
      <section className="manage">
        <h3>Reset Password</h3>
      </section>
      <section className="formact">

      <div>
          <input
            type="hidden"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

      <div className="" style={{marginBottom:"30px"}}>
        <p style={{color:"#fff",marginBottom:"5px"}}>Password</p>
          <div style={{ position: "relative" }} className="type">
            <input
              type={encrypted ? "password" : "text"}
              placeholder="Your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div
              className="pointer"
              onClick={() => setEncrypted(!encrypted)}
              style={{
                position: "absolute",
                right: 19.89,
                // backgroundColor: "red",
                top: 0,
                height: "100%",
                display: "flex",
                alignItems: "center"
              }}
            >
              {!encrypted ? (
                <img src="./images/see.svg" />
              ) : (
                <img src="./images/encrypt.svg" />
              )}
            </div>
          </div>
        </div>
        
        <div className="">
        <p style={{color:"#fff",marginBottom:"5px"}}>Confirm password</p>
          <div style={{ position: "relative" }} className="type">
            <input
              type={encrypted ? "password" : "text"}
              placeholder="Confirm password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div
              className="pointer"
              onClick={() => setEncrypted(!encrypted)}
              style={{
                position: "absolute",
                right: 19.89,
                // backgroundColor: "red",
                top: 0,
                height: "100%",
                display: "flex",
                alignItems: "center"
              }}
            >
              {!encrypted ? (
                <img src="./images/see.svg" />
              ) : (
                <img src="./images/encrypt.svg" />
              )}
            </div>
          </div>
        </div>

        <button className="puts put" onClick={createPass}>
          Create Password
        </button>

        <div className="copy">
          <p>© 2022 Gotruhub and Gotruhub logo are trademarks of the company.</p>
          <p className="white">
            Please visit our <span>Terms of service</span> for more details.
          </p>
        </div>
      </section>
    </section>
  );
}
