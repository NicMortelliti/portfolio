import React from "react";

// Styled components
import { Wrapper } from "../components/styles/Portfolio.styled";

// Data
import { data } from "../data/portfolioData";

const Portfolio = () => {
  const RenderItems = () =>
    data.map(({ to, image, text, description }) => (
      <Wrapper href={to}>
        <h1 className="icon">{image}</h1>
        <h3 className="title">{text}</h3>
        <h4 className="desc">{description}</h4>
      </Wrapper>
    ));

  return (
    <nav>
      <RenderItems />
    </nav>
  );
};

export default Portfolio;
