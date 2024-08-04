import { Avatar, Box, Typography } from "@mui/material";

import { about } from "../constants/about";

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
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          margin: "auto",
          color: "black",
          marginBottom: "20px",
          fontWeight: "bold",
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
                // backgroundColor: "white",
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
              <Avatar src={info.icon} sx={{}} />
              <Typography variant="h6" textAlign={"center"} color={"#03346E"}>
                {info.title}
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                {info.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default About;
