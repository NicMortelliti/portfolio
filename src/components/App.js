import "../style/App.css";

// Import components
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroAbout />
    </div>
  );
}

export default App;
