import {
  HiOutlineSparkles as HiSparkles,
  HiOutlineTrendingUp as HiTrendingUp,
  HiOutlineClock as HiClock,
  HiOutlineBadgeCheck as HiBadgeCheck,
  HiOutlineLightBulb as HiLightBulb,
} from "react-icons/hi";

import {
  DiReact as React,
  DiRuby as Ruby,
  DiPostgresql as Postgres,
  DiJavascript as Javascript,
  DiHtml5 as Html,
  DiCss3 as Css,
} from "react-icons/di";

import {
  SiSqlite as Sqlite,
  SiJson as Json,
  SiMaterialui as Material,
} from "react-icons/si";
export const data = [
  {
    to: "https://moonshot.nicweb.dev",
    text: "Moonshot",
    description: "A fictional space flight booking site.",
    icon: <HiSparkles />,
    techIcons: [<React />, <Ruby />, <Postgres />, <Css />],
  },
  {
    to: "https://scheduler.nicweb.dev",
    text: "Appointment Scheduler",
    description: "An application for booking appointments.",
    icon: <HiClock />,
    techIcons: [<React />, <Ruby />, <Postgres />],
  },
  {
    to: "https://kanban.nicweb.dev",
    text: "Kanban",
    description: "A project tracking tool for agile teams.",
    icon: <HiTrendingUp />,
    techIcons: [<React />, <Ruby />, <Sqlite />],
  },
  {
    to: "https://checklist.nicweb.dev",
    text: "Piloting Checklist",
    description: "Finally, a simple checklist app for flying.",
    icon: <HiBadgeCheck />,
    techIcons: [<React />, <Json />, <Material />],
  },
  {
    to: "https://bored.nicweb.dev",
    text: "Bored?",
    description: "Looking for hobby or activity ideas? Try this app.",
    icon: <HiLightBulb />,
    techIcons: [<Html />, <Javascript />, <Material />],
  },
];
