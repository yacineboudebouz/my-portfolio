import "./App.css";
import { mainBg } from "./assets";

import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${mainBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: {
            xs: "100%",
            sm: "100vh",
          },
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
      <Contact />
    </div>
  );
}

export default App;
