import React from "react";

import PortfolioCard from "./PortfolioCard";

// Import images
import imageScrum from "../assets/screencasts/ScrumUsageDemo.gif";
import imageChecklist from "../assets/screencasts/ChecklistUsageDemo.gif";
import imageBored from "../assets/screencasts/BoredUsageDemo.gif";

const demo = [
  {
    demoURL: "https://scrumban.netlify.app/",
    ghURL: "https://github.com/stars/NicMortelliti/lists/scrumban",
    title: "Scrumban",
    blurb:
      "A React application that interfaces with a Ruby backend that allows teams to manage their projects using a scrum/kanban approach.",
    img: imageScrum,
  },
  {
    demoURL: "https://pilotchecklist.netlify.app/",
    ghURL: "https://github.com/stars/NicMortelliti/lists/checklist",
    title: "Flying Checklist",
    blurb:
      "A mobile React application using Material UI that replaces paper checklists used by pilots.",
    img: imageChecklist,
  },
  {
    demoURL: "https://nicmortelliti.github.io/Bored/",
    ghURL: "https://github.com/NicMortelliti/Bored",
    title: "Bored?",
    blurb:
      "An application built with JavaScript and HTML that returns activity ideas from an API based on the users form selections.",
    img: imageBored,
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      {demo.map((each) => (
        <PortfolioCard key={each.title} cardData={each} />
      ))}
    </div>
  );
}

export default Portfolio;
