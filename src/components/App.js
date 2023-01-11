import "../style/App.css";

// Styled Components
import GlobalStyles from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "/styles/Theme.styled";
import { Wrapper } from "/styles/Layout.styled";

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
        <Navbar />
        <HeroAbout />
        <CallToAction />
        <Portfolio />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
