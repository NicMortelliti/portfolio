import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Styled Components
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import {
  Wrapper,
  HeaderSection,
  MainSection,
  MemojiSection,
  ThemeSwitcherSection,
  FooterSection,
} from "./components/styles/Layout.styled";

// Import components
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Memoji from "./components/ui/Memoji/Memoji";
import ThemeButton from "./components/ui/Buttons/ThemeButton";
import { Nav } from "./components/ui/Navigation";

function App() {
  const [darkThemeIsSet, setDarkThemeIsSet] = useState(true);
  const [notFoundIsSet, setNotFoundIsSet] = useState(false);

  return (
    <ThemeProvider theme={darkThemeIsSet ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <HeaderSection>
          <Nav />
        </HeaderSection>
        <MainSection>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<NotFound setNotFound={setNotFoundIsSet} />}
            />
          </Routes>
        </MainSection>
        <FooterSection />
      </Wrapper>
      <MemojiSection>
        <Memoji darkThemeIsSet={darkThemeIsSet} notFound={notFoundIsSet} />
      </MemojiSection>
      <ThemeSwitcherSection>
        <ThemeButton
          darkThemeIsSet={darkThemeIsSet}
          setDarkThemeIsSet={setDarkThemeIsSet}
        />
      </ThemeSwitcherSection>
    </ThemeProvider>
  );
}

export default App;
