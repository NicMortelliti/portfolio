import React from "react";
import {
  HiSparkles,
  HiTrendingUp,
  HiClock,
  HiBadgeCheck,
  HiLightBulb,
} from "react-icons/hi";

const Portfolio = () => {
  const links = [
    {
      to: "https://moonshot.nicweb.dev",
      text: "Moonshot",
      description: "A fictional space flight booking site.",
      image: <HiSparkles />,
    },
    {
      to: "https://scheduler.nicweb.dev",
      text: "Appointment Scheduler",
      description: "An application for booking appointments.",
      image: <HiClock />,
    },
    {
      to: "https://kanban.nicweb.dev",
      text: "Kanban",
      description: "A project tracking tool for agile teams.",
      image: <HiTrendingUp />,
    },
    {
      to: "https://checklist.nicweb.dev",
      text: "Piloting Checklist",
      description: "Finally, a simple checklist app for flying.",
      image: <HiBadgeCheck />,
    },
    {
      to: "https://bored.nicweb.dev",
      text: "Bored?",
      description: "Looking for hobby or activity ideas? Try this app.",
      image: <HiLightBulb />,
    },
  ];

  const RenderItems = () =>
    links.map(({ to, image, text, description }) => (
      <a href={to}>
        <h1>{image}</h1>
        <h3>{text}</h3>
        <h4>{description}</h4>
      </a>
    ));

  return (
    <nav>
      <RenderItems />
    </nav>
  );
};

export default Portfolio;
