import React from "react";

export const NMSelect = ({
  placeholder = "",
  options = [],
  style = {},
  ...rest
}) => (
  <fieldset style={{ flex: 1, border: "none", marginBottom: 0,}}>
    <select
      type="text"
      style={{
        padding: "18px 24px",
        border: "1px solid rgba(218, 223, 221, 1)",
        width: "100%",
        borderRadius:8,
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
