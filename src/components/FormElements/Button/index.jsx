import React from "react";

export const Button = ({
  classes = "fg-grey1 br-8",
  title = "action",
  btnStyles = {},
  ...rest
}) => (
  <button
    style={{ padding: "16px 30px", ...btnStyles }}
    className={"font-std bd-grey4 hover f14 transparent " + classes}
    {...rest}
  >
    {title}
  </button>
);
