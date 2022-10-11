import { Typography, Box } from "@mui/material";
import { Button } from "../..";
import { ModalContainer } from "../ModalContainer";
import { useNavigate } from "react-router-dom";
export const RegistrationStatusModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <ModalContainer
      title="Registration Status"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <Box className="cenetr" sx={{ mt: 5 }}>
        <Typography sx={{ textAlign: "center" }}>
          Registration was successful. Await approval status in your email.
        </Typography>
      </Box>
      <Box className="center" sx={{ mt: 5 }}>
        <Button
          onClick={goHome}
          title="Continue"
          style={{
            backgroundColor: "#19201D",
            padding: "15px 40px",
            color: "#fff"
          }}
        />
      </Box>
    </ModalContainer>
  );
};
