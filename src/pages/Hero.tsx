import { Box, Button, Typography } from "@mui/material";
import { bio } from "../constants/texts";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <Typography
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
            textShadow: "2px 2px 20px #000",
          }}
        >
          <span style={{ fontSize: "3rem", fontFamily: "Poppins" }}>
            Hello, I'm Yacine !
          </span>
        </Typography>
        <Typography
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
            textShadow: "2px 2px 20px #000",
          }}
        >
          <span style={{ fontSize: "1.2rem", fontFamily: "Oswald" }}>
            {bio}
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "20px",
            gap: "20px",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Button
            sx={{
              width: "100%",
              padding: "12px",
              background: "#03346E",
              color: "white",
              borderRadius: "35px",
              border: "3px solid #03346E",
              fontFamily: "Poppins",
              fontWeight: "bold",
              ":hover": {
                color: "#03346E",
              },
            }}
          >
            Download CV
          </Button>
          <Button
            sx={{
              width: "100%",
              padding: "12px",
              margin: "auto",
              background: "transparent",
              color: "white",
              borderRadius: "35px",
              border: "3px solid white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              ":hover": {
                color: "#03346E",
                border: "3px solid #03346E",
              },
            }}
          >
            Project Source code
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          display: {
            xs: "none",
            sm: "block",
            md: "block",
          },
        }}
      ></Box>
    </Box>
  );
};

export default Hero;
