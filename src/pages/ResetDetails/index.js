import { Link } from "react-router-dom";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Details({}) {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const body = {
    email
  };
  console.log(body);
  const notify = (message) => toast(message);

  async function reset() {
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

        <button className="puts put" onClick={reset}>
          Reset Password
        </button>
        <div className="new">
          <p>
            <Link to="/sign-in" style={{color:"#fff"}}>
              Cancel
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
