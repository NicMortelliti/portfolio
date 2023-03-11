import React from "react";
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
import { PortfolioPage } from "./pages/Portfolio/index";
import Contact from "./pages/Contact/Contact";
import ThemeButton from "./components/ui/Buttons/ThemeButton";
import { Nav } from "./components/ui/Navigation";

// Redux
import { useSelector } from "react-redux";

function App() {
  const { navMenuIsOpen, darkThemeActive } = useSelector((state) => state.ui);

  return (
    <ThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <HeaderSection>
          <Nav />
        </HeaderSection>
        {!navMenuIsOpen ? (
          <MainSection>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainSection>
        ) : null}
        <FooterSection />
      </Wrapper>
      {!navMenuIsOpen && (
        <ThemeSwitcherSection>
          <ThemeButton />
        </ThemeSwitcherSection>
      )}
    </ThemeProvider>
  );
}

export default App;
