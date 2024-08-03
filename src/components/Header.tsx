import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Logo from "./shared/Logo";
import PositionedMenu from "./shared/Menu";
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
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: "10px", sm: "25px" },
            }}
          >
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

            <Typography>
              <a href="#contact" className="header-nav">
                Contact
              </a>
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              gap: "15px",
            }}
          >
            <PositionedMenu />
          </Box>

          <Box
            sx={{
              gap: { xs: "10px", sm: "30px" },
            }}
          >
            <GitHubIcon
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
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
