import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const RegistrationTitle = ({ title = "Registered Organization" }) => {
  return (
    <>
      <h1
        style={{
          color: "#19201D",

          fontSize: 24,

          fontWeight: "700",

          marginBottom: 40,
          textAlign: "center"
        }}
      >
        {title}
      </h1>
      <Box sx={{ position: "absolute", top: 6 }} className="desktopOnly">
        <Link to="/sign-up-biz-types" className="flex align-center">
          <img src="/images/back1.svg" alt="back img" />
          <Typography sx={{ fontSize: "12px", color: "#19201D", ml: 1 }}>
            Back
          </Typography>
        </Link>
      </Box>
    </>
  );
};
