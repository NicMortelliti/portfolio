import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styled Components
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { blue } from "./styles/Theme";
import { Wrapper } from "./styles/Layout.styled";

// Import components
import Navbar from "./Navbar";
import About from "../pages/About";
import Landing from "../pages/Landing";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function App() {
  const [theme, setTheme] = useState(blue);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <div className="nav">
            <Navbar setTheme={setTheme} />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
