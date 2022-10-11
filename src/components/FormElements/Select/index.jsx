import React from "react";

export const Select = ({
  title = "",
  placeholder = "",
  options = [],
  style = {},
  ...rest
}) => (
  <fieldset style={{ flex: 1, border: "none", marginBottom: 32 }}>
    <label style={{ marginBottom: 8 }} className="block f14">
      {title}
    </label>
    <select
      type="text"
      placeholder="Product name"
      style={{
        padding: "18px 24px",
        border: "1px solid rgba(218, 223, 221, 1)",
        width: "100%",
        ...style
      }}
      {...rest}
    >
      <option> {placeholder}</option>
      {options.map((option, idx) => (
        <option value={option.value} key={`${option.value}_${idx}`}>
          {option.label}
        </option>
      ))}
    </select>
  </fieldset>
);
