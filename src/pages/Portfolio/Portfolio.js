import React from "react";

// Styled components
import {
  Wrapper,
  ProjectTitle,
  ProjectCell,
  Section,
} from "../../components/styles/Portfolio/Portfolio.styled";
import { PageTitle } from "../../components/styles/Layout.styled";

// Components
import PortfolioCard from "./PortfolioCard";

// Data
import { data } from "../../data/portfolioData";

const Portfolio = () => {
  // Map through the data object
  // - Render a card for each item in the data object
  const RenderItems = () =>
    data.map((project, index) => {
      return (
        <ProjectCell key={index}>
          <ProjectTitle text={project.title}>
            <p>
              {project.title}
              <span />
              <span />
            </p>
            <PortfolioCard project={project} />
          </ProjectTitle>
        </ProjectCell>
      );
    });

  return (
    <Wrapper>
      <Section>
        <PageTitle>Portfolio</PageTitle>
        <RenderItems />
      </Section>
    </Wrapper>
  );
};

export default Portfolio;
