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
  ThemeSwitcherSection,
  FooterSection,
} from "./components/styles/Layout.styled";

// Import components
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import ThemeButton from "./components/ui/Buttons/ThemeButton";
import { Nav } from "./components/ui/Navigation";

function App() {
  const [darkThemeIsSet, setDarkThemeIsSet] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <ThemeProvider theme={darkThemeIsSet ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper menuIsOpen={menuIsOpen}>
        <HeaderSection>
          <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        </HeaderSection>
        {!menuIsOpen ? (
          <MainSection>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainSection>
        ) : null}
        <FooterSection />
      </Wrapper>
      {!menuIsOpen && (
        <>
          <ThemeSwitcherSection>
            <ThemeButton
              darkThemeIsSet={darkThemeIsSet}
              setDarkThemeIsSet={setDarkThemeIsSet}
            />
          </ThemeSwitcherSection>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
