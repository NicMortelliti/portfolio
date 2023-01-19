import {
  HiOutlineSparkles as HiSparkles,
  HiOutlineTrendingUp as HiTrendingUp,
  HiOutlineClock as HiClock,
  HiOutlineBadgeCheck as HiBadgeCheck,
  HiOutlineLightBulb as HiLightBulb,
} from "react-icons/hi";

export const data = [
  {
    to: "https://moonshot.nicweb.dev",
    text: "Moonshot",
    description: "A fictional space flight booking site.",
    icon: <HiSparkles />,
  },
  {
    to: "https://scheduler.nicweb.dev",
    text: "Appointment Scheduler",
    description: "An application for booking appointments.",
    icon: <HiClock />,
  },
  {
    to: "https://kanban.nicweb.dev",
    text: "Kanban",
    description: "A project tracking tool for agile teams.",
    icon: <HiTrendingUp />,
  },
  {
    to: "https://checklist.nicweb.dev",
    text: "Piloting Checklist",
    description: "Finally, a simple checklist app for flying.",
    icon: <HiBadgeCheck />,
  },
  {
    to: "https://bored.nicweb.dev",
    text: "Bored?",
    description: "Looking for hobby or activity ideas? Try this app.",
    icon: <HiLightBulb />,
  },
];
