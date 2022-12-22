import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context, AgentContext } from "../../contexts";

export const Logout = () => {
  const navigate = useNavigate();
  const { agent, setAgent } = useContext(AgentContext);
  useEffect(() => {
    setAgent({});
    localStorage.clear();
    navigate("/sign-in");
  }, []);
  return (
    <main className="firstmain">
      <section className="secmain">
        <div className="naviHold">
          <nav className="logoHold">
          </nav>
        </div>
      </section>
    </main>
  );
};
