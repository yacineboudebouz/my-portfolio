import { Avatar, Box, Stack, Typography } from "@mui/material";
import { educations } from "../constants/education";

const Education = () => {
  return (
    <Stack
      sx={{
        height: "100%",
        width: "full",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f8f8",
        fontFamily: "Oswald",
        padding: {
          xs: "30px 80px",
          sm: "30px 80px",
        },
      }}
    >
      <span id="education" />
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
        // className="poppins"
      >
        Education
      </Typography>
      <Box
        sx={{
          display: "flex",

          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {educations.map((education, index) => {
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
              {education.imgUrl && <Avatar src={education.imgUrl} sx={{}} />}
              {education.imgUrl === null && (
                <Avatar sx={{ background: "#03346E" }}>
                  {education.school[0].toUpperCase()}
                </Avatar>
              )}

              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontFamily: "Oswald" }}
                color={"#03346E"}
              >
                {education.school}
              </Typography>
              <Typography variant="h6" fontFamily={"Oswald"}>
                {education.location}
              </Typography>
              <Typography variant="body1" fontFamily={"Oswald"}>
                {education.date}
              </Typography>
              <Typography
                variant="body2"
                fontFamily={"Oswald"}
                textAlign={"center"}
              >
                {education.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Education;
