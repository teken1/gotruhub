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
    email,
    password
  };
  console.log(body);
  const notify = (message) => toast(message);

  async function login() {
    if (!email || !password) {
      notify("Email and Password are required!");
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
        <h3>Login to manage your company</h3>
      </section>
      <section className="formact">
        <div className="type" style={{ marginBottom: 30 }}>
          <p style={{color:"#fff",marginBottom:"5px"}}>Email Address</p>
          <input
            type="text"
            placeholder="hello@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="">
        <p style={{color:"#fff",marginBottom:"5px"}}>Password</p>
          <div style={{ position: "relative" }} className="type">
            <input
              type={encrypted ? "password" : "text"}
              placeholder="Enter a password"
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

        {/* <div className="type pist">
          <label>Password</label>
          <div className="pistHold">
            <input
              type={encrypted ? "password" : "text"}
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {!encrypted ? (
              <img
                src="./images/see.svg"
                onClick={() => setEncrypted(!encrypted)}
              />
            ) : (
              <img
                src="./images/encrypt.svg"
                onClick={() => setEncrypted(!encrypted)}
              />
            )}
          </div>
        </div> */}
        <div className="forgot">
          <p>
            Forgot Password?&nbsp;
            <Link to="/reset-password" className="reset">
              Reset
            </Link>
          </p>
        </div>

        <button className="puts put" onClick={login}>
          Log in
        </button>
        <div className="new">
          <p>
            New to Gotru?&nbsp;
            <Link to="/sign-up-biz-types" className="reset">
              Sign up
            </Link>
          </p>
        </div>
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
