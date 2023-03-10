import React from "react";

// Styled components
import { Link, LinkCont } from "../../components/styles/Link.styled";
import { Wrapper } from "../../components/styles/Page.styled";

// Data
import { data } from "../../data/portfolioData";

const Portfolio = () => {
  // Render each icon for the tech used to build project
  const RenderTechNames = ({ techNames }) => (
    <div>
      {techNames.map((techNames, index) => {
        return <p key={index}>{techNames}</p>;
      })}
    </div>
  );

  const RenderItems = () => (
    <LinkCont>
      {data.map(({ to, icon, text, description, techNames }, index) => (
        <Link key={index} href={to} target="_blank">
          <h1 className="icon">{icon}</h1>
          <h3 className="title">{text}</h3>
          <h4 className="desc">{description}</h4>
          <RenderTechNames techNames={techNames} />
        </Link>
      ))}
    </LinkCont>
  );

  return (
    <Wrapper>
      <h1>Portfolio</h1>
      <RenderItems />
    </Wrapper>
  );
};

export default Portfolio;
