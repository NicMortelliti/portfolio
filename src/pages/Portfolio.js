import React from "react";

// Data
import { data } from "../data/portfolioData";

const Portfolio = () => {
  const RenderItems = () =>
    data.map(({ to, image, text, description }) => (
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
