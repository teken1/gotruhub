import { Box, Typography } from "@mui/material";

export const ModalContainer = ({
  title = "The title",
  children,
  isOpen,
  closeModal,
  containerStyle = {}
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.6)",
        width: "100vw",
        height: "100vh",
        top: 0,
        position: "fixed",
        left: 0,
        display: isOpen ? "grid" : "none",
        placeItems: "center",
        padding: "0 6vw",
        zIndex: 10,

        ...containerStyle
      }}
    >
      <Box sx={{ p: 5, backgroundColor: "#fff", minWidth: 300 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderBottom: "1px solid #DBE2DF", pb: 2.5 }}
        >
          <Typography
            sx={{ color: "#19201D", fontWeight: "500" }}
            className="fw500"
          >
            {title}
          </Typography>
          <Box>
            <img src="/images/close.svg" alt="close" onClick={closeModal} />
          </Box>
        </Box>

        {children}
      </Box>
    </Box>
  );
};
