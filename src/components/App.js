import "../style/App.css";

// Import components
import Button from "./Button";
import CallToAction from "./CallToAction";
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

// External Links
const resumeURL =
  "https://drive.google.com/file/d/14YPdAxf0GCHst7gSb9p4TZAn32ud2GfI/view?usp=sharing";
const linkedInURL = "https://www.linkedin.com/in/nicolas-mortelliti/";
const githubURL = "https://github.com/NicMortelliti";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroAbout />
      <Button url={resumeURL} value="Resume" />
      <Button url={linkedInURL} value="LinkedIn" />
      <Button url={githubURL} value="Github" />
      <Portfolio />
      <CallToAction />
    </div>
  );
}

export default App;
