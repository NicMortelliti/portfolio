import React from "react";

const Portfolio = () => {
  const links = [
    {
      to: "https://moonshot.nicweb.dev",
      text: "Moonshot",
      description: "A fictional space flight booking site.",
    },
    {
      to: "https://scheduler.nicweb.dev",
      text: "Appointment Scheduler",
      description: "An application for booking appointments.",
    },
    {
      to: "https://kanban.nicweb.dev",
      text: "Kanban",
      description: "A project tracking tool for agile teams.",
    },
    {
      to: "https://checklist.nicweb.dev",
      text: "Piloting Checklist",
      description: "Finally, a simple checklist app for flying.",
    },
    {
      to: "https://bored.nicweb.dev",
      text: "Bored?",
      description: "Looking for hobby or activity ideas? Try this app.",
    },
  ];

  const RenderItems = () =>
    links.map(({ to, text, description }) => (
      <a href={to}>
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
