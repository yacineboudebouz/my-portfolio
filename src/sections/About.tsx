import { Box, Typography } from "@mui/material";

import { about, skills } from "../constants/about";

const About = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "full",
        display: "flex",

        flexDirection: "column",
        backgroundColor: "#f8f8f8",
        padding: {
          xs: "30px 80px",
          sm: "30px 80px",
        },
      }}
    >
      <span id="about" />
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          margin: "auto",
          color: "black",
          marginBottom: "20px",
          fontWeight: "bold",
          fontFamily: "Poppins",
        }}
      >
        What can i do
      </Typography>
      <Box
        sx={{
          display: "flex",

          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {about.map((info, index) => {
          return (
            <Box
              key={index}
              sx={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "#f1f1f1",
                alignItems: "center",
                // justifyContent: "center",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                color: "black",
                width: {
                  xs: "100%",
                  sm: "250px",
                },
              }}
            >
              <img
                src={info.icon}
                style={{
                  height: "50px",
                  width: "50px",
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h6"
                textAlign={"center"}
                color={"#03346E"}
                fontFamily={"Oswald"}
              >
                {info.title}
              </Typography>
              <Typography
                variant="body2"
                textAlign={"center"}
                fontFamily={"Oswald"}
              >
                {info.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          margin: "auto",
          color: "black",
          marginBottom: "20px",
          fontWeight: "bold",
          marginTop: "20px",
          fontFamily: "Poppins",
        }}
      >
        Techs i use
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, index) => {
          return (
            <Box
              key={index}
              sx={
                index % 2 == 0
                  ? {
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      color: "black",
                      padding: "3.5rem",
                      background: "#f0f0f0",
                    }
                  : {
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      color: "black",
                      padding: "3.5rem",
                    }
              }
            >
              <img
                src={skill.icon}
                className="skill-icon"
                style={{
                  borderRadius: "0",
                  height: "50px",
                  width: "50px",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
                onClick={() => {
                  window.open(skill.url, "_blank");
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default About;
