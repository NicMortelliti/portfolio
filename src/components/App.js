import React from "react";

// Styled Components
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { Wrapper } from "./styles/Layout.styled";

// Import components
import CallToAction from "./CallToAction";
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Navbar className="header" />
        <div className="content">
          <HeroAbout />
          <CallToAction />
          <Portfolio />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
