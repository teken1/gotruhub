import React from "react";

export const InputWithVis = ({ ...rest }) => (
  <fieldset
    style={{ marginBottom: 32, flex: 1, border: "none" }}
    className="relative"
  >
    <input
      type="text"
      style={{
        padding: "18px 24px",
        border: "1px solid rgba(218, 223, 221, 1)",
        width: "100%",
        borderRadius: 4,
      }}
      {...rest}
    />
    <div
      style={{
        position: "absolute",
        height: "100%",
        right: 0,
        top: 0,
        // backgroundColor: "red",
        padding: "0 10px",
      }}
      className="flex align-center hover pointer"
    >
      <img src="/images/val-visible.svg" />
    </div>
  </fieldset>
);
