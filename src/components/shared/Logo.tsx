import Typography from "@mui/material/Typography";
import { yacineLogo } from "../../assets";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img
        src={yacineLogo}
        alt="openai"
        width={"40px"}
        height={"40px"}
        className="my-logo"
      />

      <Typography
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "20px" }}>Yacine Boudebouz</span>
      </Typography>
    </div>
  );
};

export default Logo;
