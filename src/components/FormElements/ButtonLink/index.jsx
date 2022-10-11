import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({
  classes = "fg-grey1 br-8",
  title = "action",
  link = "#",
  btnStyles = {},
  ...rest
}) => (
  <Link
    to={link}
    style={{ padding: "16px 30px", ...btnStyles }}
    className={"font-std bd-grey4 hover f14 transparent " + classes}
    {...rest}
  >
    {title}
  </Link>
);
