import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Logo from "./shared/Logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Header = () => {
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", sm: "space-evenly" },
          alignItems: "center",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: "10px", sm: "25px" },
            }}
          >
            <Typography>
              <a href="#education" className="header-nav">
                Education
              </a>
            </Typography>

            <Typography>
              <a href="#about" className="header-nav">
                About
              </a>
            </Typography>

            <Typography>
              <a href="#projects" className="header-nav">
                Projects
              </a>
            </Typography>
          </Box>

          <Box
            sx={{
              gap: { xs: "10px", sm: "30px" },
            }}
          >
            <GitHubIcon
              onClick={() => {
                window.open("https://github.com/yacineboudebouz");
              }}
              sx={{
                color: "white",
                fontSize: "2rem",
                margin: { sx: "0 10px", sm: "0 20px" },
                ":hover": {
                  color: "#03346E",
                },
              }}
            />
            <LinkedInIcon
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/yacine-boudebouz-79b397216/"
                );
              }}
              sx={{
                color: "white",
                fontSize: "2rem",
                margin: { sx: "0 10px", sm: "0 20px" },
                ":hover": {
                  color: "#03346E",
                },
              }}
            />
            <XIcon
              sx={{
                color: "white",
                fontSize: "2rem",
                margin: { sx: "0 10px", sm: "0 20px" },
                ":hover": {
                  color: "#03346E",
                },
              }}
              onClick={() => {
                window.open("https://x.com/YaBoudebouz");
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
