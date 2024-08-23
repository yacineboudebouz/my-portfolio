import { Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Stack
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
      <span id="contact" />
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
        Contact me
      </Typography>
    </Stack>
  );
};

export default Contact;
