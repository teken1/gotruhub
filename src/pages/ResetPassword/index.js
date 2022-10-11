import React from "react";
import { Link } from "react-router-dom";
import Details from "../ResetDetails";

export const ResetPassword = () => {
  return (
    <main className="firstmain">
      <section className="secmain">
        <div className="naviHold">
          <nav className="logoHold">
            <Link to="/">
              <img src="./images/logo-white.svg"></img>
            </Link>
          </nav>
        </div>
        <Details />
      </section>
    </main>
  );
};
