import "./App.css";
import { mainBg } from "./assets";

import { Box } from "@mui/material";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Hero from "./pages/Hero";
import Education from "./pages/Education";
import About from "./pages/About";
import Projects from "./pages/Projects";

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
      <Education />
      <About />
      <Projects />
    </div>
  );
}

export default App;
