import imageMoonshot from "../assets/images/app-moonshot.webp";
import imageScheduler from "../assets/images/app-scheduler.webp";
import imageKanban from "../assets/images/app-kanban.webp";
import imageChecklist from "../assets/images/app-checklist.webp";
import imageBored from "../assets/images/app-bored.webp";

export const data = [
  {
    to: "https://moonshot.nicweb.dev",
    github: "https://github.com/NicMortelliti/moonshot",
    text: "Moonshot",
    description: "A fictional space flight booking site.",
    image: imageMoonshot,
    techNames: ["React", "Ruby on Rails", "PostgreSQL", "Styled Components"],
  },
  {
    to: "https://scheduler.nicweb.dev",
    github: "https://github.com/NicMortelliti/appointment-scheduler",
    text: "Scheduler",
    description: "An application for booking appointments.",
    image: imageScheduler,
    techNames: ["React", "Ruby on Rails", "PostgreSQL"],
  },
  {
    to: "https://kanban.nicweb.dev",
    github: "https://github.com/NicMortelliti/scrumban-client",
    text: "Kanban",
    description: "A project tracking tool for agile teams.",
    image: imageKanban,
    techNames: ["React", "Ruby", "SQLite"],
  },
  {
    to: "https://checklist.nicweb.dev",
    github: "https://github.com/NicMortelliti/checklist-frontend",
    text: "Piloting Checklist",
    description: "Finally, a simple checklist app for flying.",
    image: imageChecklist,
    techNames: ["React", "JSON"],
  },
  {
    to: "https://bored.nicweb.dev",
    github: "https://github.com/NicMortelliti/Bored",
    text: "Bored?",
    description: "Looking for hobby or activity ideas?",
    image: imageBored,
    techNames: ["HTML", "JavaScript"],
  },
];
