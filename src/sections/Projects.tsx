import { Box, Typography } from "@mui/material";

import { projects } from "../constants/projects";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
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
      <span id="projects" />
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
        My projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
              index={index}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
