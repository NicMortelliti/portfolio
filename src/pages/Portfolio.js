import React from "react";

// Styled components
import { Link, LinkCont } from "../components/styles/Link.styled";

// Data
import { data } from "../data/portfolioData";

const Portfolio = () => {
  const RenderItems = () => (
    <LinkCont>
      {data.map(({ to, icon, text, description }) => (
        <Link href={to}>
          <h1 className="icon">{icon}</h1>
          <h3 className="title">{text}</h3>
          <h4 className="desc">{description}</h4>
        </Link>
      ))}
    </LinkCont>
  );

  return (
    <nav>
      <RenderItems />
    </nav>
  );
};

export default Portfolio;
