import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        width: "full",
        background: "#dee0e3",

        padding: "50px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
    >
      Made with ❤️ by Yacine
    </Stack>
  );
};

export default Footer;
