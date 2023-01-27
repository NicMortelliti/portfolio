import React from "react";

// Styled Components
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { Wrapper, Section } from "./styles/Layout.styled";

// Import components
import About from "../pages/About";
import Landing from "../pages/Landing";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Section section="landing">
          <Landing />
        </Section>
        <Section section="about">
          <About />
        </Section>
        <Section section="portfolio">
          <Portfolio />
        </Section>
        <Section section="contact">
          <Contact />
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
