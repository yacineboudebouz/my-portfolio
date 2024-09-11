import { Box, Button, Stack, Typography } from "@mui/material";
import { bio } from "../constants/texts";
import { myresume } from "../assets";

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
      <Stack sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
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
          <span
            style={{ fontSize: "3rem", fontFamily: "Poppins", color: "white" }}
          >
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
          <span
            style={{ fontSize: "1.2rem", fontFamily: "Oswald", color: "white" }}
          >
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
            // onClick={handleDownload}
            href={myresume}
            download="Yacine_Boudebouz.pdf"
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
            onClick={() =>
              window.open("https://github.com/yacineboudebouz/my-portfolio")
            }
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
      </Stack>
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
