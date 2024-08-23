import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { mainColor } from "../../constants/colors";
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textShadow: "2px 2px 20px #000",

          ":hover": {
            color: { mainColor },
          },
        }}
      >
        Sections
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography>
            <a href="#education" className="header-nav-sx">
              Education
            </a>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>
            <a href="#about" className="header-nav-sx">
              About
            </a>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>
            <a href="#projects" className="header-nav-sx">
              Projects
            </a>
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
