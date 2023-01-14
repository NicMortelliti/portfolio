import React from "react";

// Styled Components
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { Wrapper } from "./styles/Layout.styled";

// Import components
import Navbar from "./Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <div className="content">
          <h1 style={{ fontSize: "5em" }}>🏗️</h1>
          <h1 style={{ fontSize: "9vw", textAlign: "center" }}>
            Under Construction
          </h1>
          <Navbar />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
