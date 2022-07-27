import "../style/App.css";

// Import components
import Button from "./Button";
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";
import PortfolioCard from "./PortfolioCard";

// Import images
import imageScrum from "../assets/screencasts/ScrumUsageDemo.gif";
import imageChecklist from "../assets/screencasts/ChecklistUsageDemo.gif";

// External Links
const resumeURL =
  "https://drive.google.com/file/d/14YPdAxf0GCHst7gSb9p4TZAn32ud2GfI/view?usp=sharing";
const linkedInURL = "https://www.linkedin.com/in/nicolas-mortelliti/";
const githubURL = "https://github.com/NicMortelliti";

const demo = {
  demoURL: "https://scrumban.netlify.app/",
  ghURL: "https://github.com/stars/NicMortelliti/lists/scrumban",
  title: "Scrumban",
  blurb:
    "A React application that interfaces with a Ruby backend that allows teams to manage their projects using a scrum/kanban approach.",
  img: imageScrum,
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroAbout />
      <Button url={resumeURL} value="Resume" />
      <Button url={linkedInURL} value="LinkedIn" />
      <Button url={githubURL} value="Github" />
      <PortfolioCard cardData={demo} />
    </div>
  );
}

export default App;
