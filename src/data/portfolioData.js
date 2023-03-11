import {
  HiOutlineSparkles as HiSparkles,
  HiOutlineTrendingUp as HiTrendingUp,
  HiOutlineClock as HiClock,
  HiOutlineBadgeCheck as HiBadgeCheck,
  HiOutlineLightBulb as HiLightBulb,
} from "react-icons/hi";

import { SlPlane as Plane } from "react-icons/sl"

export const data = [
  {
    to: "https://moonshot.nicweb.dev",
    text: "Moonshot",
    description: "A fictional space flight booking site.",
    icon: <HiSparkles />,
    techNames: ["React", "Ruby on Rails", "PostgreSQL", "Styled Components"],
    professional: false,
  },
  {
    to: "https://scheduler.nicweb.dev",
    text: "Appointment Scheduler",
    description: "An application for booking appointments.",
    icon: <HiClock />,
    techNames: ["React", "Ruby on Rails", "PostgreSQL"],
    professional: false,
  },
  {
    to: "https://kanban.nicweb.dev",
    text: "Kanban",
    description: "A project tracking tool for agile teams.",
    icon: <HiTrendingUp />,
    techNames: ["React", "Ruby", "Sqlite"],
    professional: false,
  },
  {
    to: "https://checklist.nicweb.dev",
    text: "Piloting Checklist",
    description: "Finally, a simple checklist app for flying.",
    icon: <HiBadgeCheck />,
    techNames: ["React", "JSON"],
    professional: false,
  },
  {
    to: "https://bored.nicweb.dev",
    text: "Bored?",
    description: "Looking for hobby or activity ideas?",
    icon: <HiLightBulb />,
    techNames: ["HTML", "JavaScript"],
    professional: false,
  },
  {
    to: "https://www.collinsaerospace.com/what-we-do/industries/business-aviation/flight-deck/pro-line-fusion",
    text: "ProLine Fusion",
    description: "Engine Data and System Status GUI development focal.",
    icon: <Plane />,
    techNames: ["VAPS XT", "SVN", "Eclipse IDE"],
    professional: "Collins Aerospace",
  },
];
