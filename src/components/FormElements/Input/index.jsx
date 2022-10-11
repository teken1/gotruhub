import React from "react";

export const Input = ({
  title = "Product name",
  containerStyle,
  style,
  labelStyle,
  ...rest
}) => (
  <fieldset
    style={{ marginBottom: 32, flex: 1, border: "none", ...containerStyle }}
  >
    <label
      style={{ marginBottom: 8, fontWeight: "500", ...labelStyle }}
      className="block f14"
    >
      {title}
    </label>
    <input
      type="text"
      style={{
        padding: "18px 24px",
        border: "1px solid #D5D7E4",
        width: "100%",
        ...style
      }}
      {...rest}
    />
  </fieldset>
);
