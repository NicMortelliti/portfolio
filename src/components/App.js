import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styled Components
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { Wrapper } from "./styles/Layout.styled";

// Import components
import Navbar from "./Navbar";
import About from "../pages/About";
import Landing from "../pages/Landing";
import Portfolio from "../pages/Portfolio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <div className="nav">
            <Navbar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
