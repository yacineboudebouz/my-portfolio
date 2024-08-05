import { Box, Card, CardMedia, Typography } from "@mui/material";

interface Props {
  title: string;
  description: string;
  image: string;
  techs: string[];
  index: number;
}

const ProjectCard = (prop: Props) => {
  return (
    <Box
      key={prop.index}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        // backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "start",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        color: "black",
        width: {
          xs: "100%",
          sm: "300px",
        },
      }}
    >
      <Card
        sx={{
          borderRadius: "10px 10px 0 0 ",
        }}
      >
        <CardMedia
          component="img"
          image={prop.image}
          alt="Image description"
          sx={{
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Card>
      <Box
        sx={{
          padding: "0.5rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            textAlign: "start",
            color: "#021526",
            fontWeight: "bold",
          }}
        >
          {prop.title}
        </Typography>

        <Typography
          sx={{
            textAlign: "start",
            color: "#021526",
            fontFamily: "Oswald",
          }}
        >
          {prop.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "5px",
            marginTop: "10px",
          }}
        >
          {prop.techs.map((tech, index) => {
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#f8f8f8",
                  color: "#021526",
                  border: "1px solid #021526",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "5px",
                  fontSize: "0.6rem",
                  width: "fit-content",
                  transition: "0.3s",
                  cursor: "auto",
                  ":hover": {
                    backgroundColor: "#021526",
                    color: "#f8f8f8",
                  },
                }}
              >
                {tech}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
