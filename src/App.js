import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styled Components
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import {
  Wrapper,
  HeaderSection,
  MainSection,
  MemojiSection,
} from "./components/styles/Layout.styled";

// Import components
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Memoji from "./components/ui/Memoji/Memoji";
import ThemeButton from "./components/ui/Buttons/ThemeButton";

function App() {
  const [darkThemeIsSet, setDarkThemeIsSet] = useState(true);
  const [notFoundIsSet, setNotFoundIsSet] = useState(false);

  return (
    <ThemeProvider theme={darkThemeIsSet ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <Router>
          <HeaderSection>
            <ThemeButton
              darkThemeIsSet={darkThemeIsSet}
              setDarkThemeIsSet={setDarkThemeIsSet}
            />
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
        </Router>
      </Wrapper>
      <MemojiSection>
        <Memoji darkThemeIsSet={darkThemeIsSet} notFound={notFoundIsSet} />
      </MemojiSection>
    </ThemeProvider>
  );
}

export default App;
