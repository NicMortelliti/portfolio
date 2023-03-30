import React from "react";

// Styled components
import {
  Card,
  CardInner,
  CardFront,
  CardBack,
  CardLinkContainer,
  Tech,
} from "../../components/styles/Portfolio/PortfolioCard.styled";
import { Link } from "../../components/styles/Buttons.styled";

const PortfolioCard = ({
  project: { github, to, image, text, description, techNames },
}) => {
  // Render each tech name
  const RenderTechNames = () =>
    techNames.map((name, index) => <Tech key={index}>{name}</Tech>);

  return (
    <Card>
      <CardInner>
        <CardFront>
          <img src={image} alt="screenshot" />
          <h1>{text}</h1>
        </CardFront>
        <CardBack>
          <h1>{text}</h1>
          <p>{description}</p>
          <CardLinkContainer>
            <Link
              altColor="black"
              href={github}
              target="_blank"
              rel="noreferrer">
              Github
            </Link>
            <Link altColor="black" href={to} target="_blank" rel="noreferrer">
              Demo
            </Link>
          </CardLinkContainer>
          <RenderTechNames />
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default PortfolioCard;
