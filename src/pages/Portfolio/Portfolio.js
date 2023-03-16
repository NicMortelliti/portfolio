import React from "react";

// Components
import PortfolioCard from "./PortfolioCard";

// Styled components
import { LinkCont } from "../../components/styles/Link.styled";
import { Wrapper } from "../../components/styles/Page.styled";
import { PageTitle } from "../../components/styles/Layout.styled";

// Data
import { data } from "../../data/portfolioData";

const Portfolio = () => {
  // Map through the data object
  // - Render a card for each item in the data object
  const RenderItems = () => (
    <LinkCont>
      {data.map((project, index) => (
        <PortfolioCard key={index} project={project} />
      ))}
    </LinkCont>
  );

  return (
    <Wrapper>
      <PageTitle>Portfolio</PageTitle>
      <RenderItems />
    </Wrapper>
  );
};

export default Portfolio;
