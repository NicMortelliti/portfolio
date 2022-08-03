import "../style/App.css";

// Import components
import CallToAction from "./CallToAction";
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroAbout />
      <CallToAction />
      <Portfolio />
    </div>
  );
}

export default App;
