import { Spinner } from "@chakra-ui/react";
import { CircularProgress } from "@mui/material";
import React from "react";
export const Loader = ({ size = 25, color = "#fff", containerStyle = {} }) => {
  return (
    <div style={{ ...containerStyle }}>
      {/* <Spinner color={color} size={size} /> */}
      <CircularProgress sx={{ color: "#fff" }} size={size} />
    </div>
  );
};
