import imageMoonshot from "../assets/images/app-moonshot.webp";
import imageScheduler from "../assets/images/app-scheduler.webp";
import imageKanban from "../assets/images/app-kanban.webp";
import imageChecklist from "../assets/images/app-checklist.webp";
import imageBored from "../assets/images/app-bored.webp";

export const data = [
  {
    to: "https://moonshot.nicweb.dev",
    text: "Moonshot",
    description: "A fictional space flight booking site.",
    image: imageMoonshot,
    techNames: ["React", "Ruby on Rails", "PostgreSQL", "Styled Components"],
    professional: false,
  },
  {
    to: "https://scheduler.nicweb.dev",
    text: "Appointment Scheduler",
    description: "An application for booking appointments.",
    image: imageScheduler,
    techNames: ["React", "Ruby on Rails", "PostgreSQL"],
    professional: false,
  },
  {
    to: "https://kanban.nicweb.dev",
    text: "Kanban",
    description: "A project tracking tool for agile teams.",
    image: imageKanban,
    techNames: ["React", "Ruby", "Sqlite"],
    professional: false,
  },
  {
    to: "https://checklist.nicweb.dev",
    text: "Piloting Checklist",
    description: "Finally, a simple checklist app for flying.",
    image: imageChecklist,
    techNames: ["React", "JSON"],
    professional: false,
  },
  {
    to: "https://bored.nicweb.dev",
    text: "Bored?",
    description: "Looking for hobby or activity ideas?",
    image: imageBored,
    techNames: ["HTML", "JavaScript"],
    professional: false,
  },
  {
    to: "https://www.collinsaerospace.com/what-we-do/industries/business-aviation/flight-deck/pro-line-fusion",
    text: "ProLine Fusion",
    description: "Engine Data and System Status GUI development focal.",
    image: imageBored,
    techNames: ["VAPS XT", "SVN", "Eclipse IDE"],
    professional: "Collins Aerospace",
  },
  {
    to: "http://www.collinsaerospace.com/what-we-do/industries/military-and-defense/displays-and-controls/airborne/head-up-guidance-system-enhanced-vision-system-hgs-evs",
    text: "Collins HGS",
    description: "Systems Verification Lead",
    image: imageBored,
    techNames: ["Flight Sim Config", "C-Programming", "Matlab/Simulink"],
    professional: "Collins Aerospace",
  },
];
