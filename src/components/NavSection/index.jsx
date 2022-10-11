import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts";
import styles from "./styles.css";

export const NavSection = ({ title, routes = [] }) => {
  const { navIsCollapsed, setNavIsCollaped } = useContext(Context);
  return (
    <section
      style={{ marginTop: 35 }}
      className={`${navIsCollapsed && "flex-col align-center"}`}
    >
      <h2
        className="transform-upper f12 fg-grey5 font-std"
        style={{ padding: "0 32px", whiteSpace: "nowrap" }}
      >
        {title}
      </h2>
      <ul style={{ marginTop: 17.33 }}>
        {routes.map((menu, idx) => (
          <li key={idx}>
            <Link
              onClick={(e) => {
                if (menu.action) {
                  e.preventDefault();
                  menu.action();
                }
              }}
              to={menu.link}
              style={{
                padding: "10px 32px",

                marginBottom: 4,
              }}
              className="flex align-center hover"
            >
              <img src={`/images/${menu.img}`} style={{ marginRight: 15.67 }} />
              {!navIsCollapsed && (
                <p
                  className="fg-dark7 font-std"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {menu.page}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
