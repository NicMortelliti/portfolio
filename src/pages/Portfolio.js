import React from "react";

// Styled components
import { Link, LinkCont } from "../components/styles/Link.styled";

// Data
import { data } from "../data/portfolioData";

const Portfolio = () => {

  // Render each icon for the tech used to build project
  const RenderIcons = ({icons}) => (
    <div>
      {icons.map((icon, index) => {
        return <h2 key={index}>{icon}</h2>
      })}
    </div>
  )

  const RenderItems = () => (
    <LinkCont>
      {data.map(({ to, icon, text, description, techIcons }) => (
        <Link href={to}>
          <h1 className="icon">{icon}</h1>
          <h3 className="title">{text}</h3>
          <h4 className="desc">{description}</h4>
          <RenderIcons icons={techIcons} />
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
