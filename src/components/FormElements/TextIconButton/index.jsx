import React from "react";

export const TextIconButton = ({
  classes = "fg-grey1 br-8",
  title = "action",
  btnStyles = {},
  imgStyles = {},
  src = "",
  ...rest
}) => (
  <button
    style={{ padding: "16px 30px", ...btnStyles }}
    className={"font-std bd-grey4 hover f14 transparent " + classes}
    {...rest}
  > <img src={src} style={{...imgStyles}}/>
    {title}
  </button>
);
