import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

// Styled Components
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import {
  Wrapper,
  Section,
  HeaderSection,
  MemojiSection,
} from "./styles/Layout.styled";

// Import components
import About from "../pages/About";
import Landing from "../pages/Landing";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Memoji from "./Memoji";
import ThemeButton from "./buttons/ThemeButton";

function App() {
  const [darkThemeIsSet, setDarkThemeIsSet] = useState(true);

  return (
    <ThemeProvider theme={darkThemeIsSet ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <HeaderSection>
          <ThemeButton
            darkThemeIsSet={darkThemeIsSet}
            setDarkThemeIsSet={setDarkThemeIsSet}
          />
        </HeaderSection>
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
        <MemojiSection>
          <Memoji darkThemeIsSet={darkThemeIsSet} />
        </MemojiSection>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
