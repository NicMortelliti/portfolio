import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import "../style/App.css";

// Import components
import CallToAction from "./CallToAction";
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
          <Navbar />
          <HeroAbout />
          <CallToAction />
          <Portfolio />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
