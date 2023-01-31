import React, { useState } from "react";

// Styled Components
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import {
  Wrapper,
  Section,
  HeaderSection,
  MemojiSection,
} from "./components/styles/Layout.styled";

// Import components
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Memoji from "../src/components/Memoji";
import ThemeButton from "./components/buttons/ThemeButton";

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
        <Section section="home">
          <Home />
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
      <MemojiSection>
        <Memoji darkThemeIsSet={darkThemeIsSet} />
      </MemojiSection>
    </ThemeProvider>
  );
}

export default App;
