import imageMoonshot from "../assets/images/app-moonshot.webp";
import imageScheduler from "../assets/images/app-scheduler.webp";
import imageKanban from "../assets/images/app-kanban.webp";
import imageChecklist from "../assets/images/app-checklist.webp";
import imageBored from "../assets/images/app-bored.webp";

export const data = [
  {
    to: "https://moonshot.nicweb.dev",
    title: "Moonshot",
    description: "A fictional space flight booking site.",
    image: imageMoonshot,
    techNames: ["React", "Ruby on Rails", "PostgreSQL", "Styled Components"],
  },
  {
    to: "https://scheduler.nicweb.dev",
    title: "Appointment Scheduler",
    description: "An application for booking appointments.",
    image: imageScheduler,
    techNames: ["React", "Ruby on Rails", "PostgreSQL"],
  },
  {
    to: "https://kanban.nicweb.dev",
    title: "Kanban",
    description: "A project tracking tool for agile teams.",
    image: imageKanban,
    techNames: ["React", "Ruby", "Sqlite"],
  },
  {
    to: "https://checklist.nicweb.dev",
    title: "Piloting Checklist",
    description: "Finally, a simple checklist app for flying.",
    image: imageChecklist,
    techNames: ["React", "JSON"],
  },
  {
    to: "https://bored.nicweb.dev",
    title: "Bored?",
    description: "Looking for hobby or activity ideas?",
    image: imageBored,
    techNames: ["HTML", "JavaScript"],
  },
];
