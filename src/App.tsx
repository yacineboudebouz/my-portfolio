import "./App.css";
import { mainBg } from "./assets";

import { Box } from "@mui/material";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${mainBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "full",
          padding: {
            xs: "20px 40px",
            sm: "30px 80px",
          },
        }}
      >
        <Header />
        <Hero />
      </Box>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Hello World</h1>
      </Box>
    </div>
  );
}

export default App;
