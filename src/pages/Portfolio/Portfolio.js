import React from "react";

// Components
import PortfolioCard from "./PortfolioCard";

// Styled components
import { LinkCont } from "../../components/styles/Link.styled";
import {
  Wrapper,
  ProjectTitle,
} from "../../components/styles/Portfolio/Portfolio.styled";
import { PageTitle } from "../../components/styles/Layout.styled";

// Data
import { data } from "../../data/portfolioData";

const Portfolio = () => {
  // Map through the data object
  // - Render a card for each item in the data object
  const RenderItems = () =>
    data.map((project, index) => {
      return (
        <ProjectTitle key={index} project={project}>
          {project.title}
        </ProjectTitle>
      );
    });

  return (
    <Wrapper>
      <PageTitle>Portfolio</PageTitle>
      <RenderItems />
    </Wrapper>
  );
};

export default Portfolio;
