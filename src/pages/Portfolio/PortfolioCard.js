import React from "react";

// Styled components
import {
  Card,
  CardTop,
  Description,
  CardLinkContainer,
  Tech,
  TechCont,
} from "../../components/styles/Portfolio/PortfolioCard.styled";

const PortfolioCard = ({
  project: { github, to, image, text, description, techNames },
}) => {
  // Render each tech name
  const RenderTechNames = () =>
    techNames.map((name, index) => <Tech key={index}>{name}</Tech>);

  return (
    <Card>
      <CardTop>
        <div>
          <h1>{text}</h1>
          <Description>{description}</Description>
          <TechCont>
            <RenderTechNames />
          </TechCont>
        </div>
        <CardLinkContainer>
          <a altColor="black" href={github} target="_blank" rel="noreferrer">
            Github
          </a>
          <a altColor="black" href={to} target="_blank" rel="noreferrer">
            Demo
          </a>
        </CardLinkContainer>
      </CardTop>
      <img src={image} alt="screenshot" />
    </Card>
  );
};

export default PortfolioCard;
