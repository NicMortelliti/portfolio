import React from "react";

// Styled components
import {
  Wrapper,
  ProjectTitle,
  ProjectTitleList,
  Section,
} from "../../components/styles/Portfolio/Portfolio.styled";
import { PageTitle } from "../../components/styles/Layout.styled";

// Data
import { data } from "../../data/portfolioData";

const Portfolio = () => {
  // Map through the data object
  // - Render a card for each item in the data object
  const RenderItems = () =>
    data.map(({ title }, index) => {
      return (
        <ProjectTitle key={index} text={title}>
          <p>
            {title}
            <span />
            <span />
          </p>
        </ProjectTitle>
      );
    });

  return (
    <Wrapper>
      <Section>
        <PageTitle>Portfolio</PageTitle>
        <ProjectTitleList>
          <RenderItems />
        </ProjectTitleList>
      </Section>
    </Wrapper>
  );
};

export default Portfolio;
