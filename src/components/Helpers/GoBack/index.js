import React from "react";
import { useNavigate } from "react-router-dom";
export const GoBack = () => {
  const navigate = useNavigate();
  return(
  <div onClick={() => navigate(-1)} style={{ marginBottom: 18 }} className="flex align-center pointer hover">
    <img
      src="/images/back-circle.svg"
      style={{ marginRight: 16 }}
      className=""
      />
    <p className="fg-dark1 f20" style={{ fontWeight: "500" }}>
      Go back
    </p>
  </div>
  );
};
