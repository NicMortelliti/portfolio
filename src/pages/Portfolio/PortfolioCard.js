import React from "react";

// Styled components
import {
  Card,
  CardTop,
  CardFlex,
  CardLink,
  Description,
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
        <CardFlex borderColor="purple" flex="1" direction="column">
          <CardFlex>
            <CardFlex align="center">
              <h1>{text}</h1>
            </CardFlex>
            <CardFlex align="center" justify="end">
              <CardLink
                altColor="black"
                href={github}
                target="_blank"
                rel="noreferrer">
                Github
              </CardLink>
              <CardLink
                altColor="black"
                href={to}
                target="_blank"
                rel="noreferrer">
                Demo
              </CardLink>
            </CardFlex>
          </CardFlex>
          <CardFlex>
            <CardFlex align="center">
              <Description>{description}</Description>
            </CardFlex>
            <TechCont>
              <RenderTechNames />
            </TechCont>
          </CardFlex>
        </CardFlex>
      </CardTop>
      <img src={image} alt="screenshot" />
    </Card>
  );
};

export default PortfolioCard;
