import React from "react";

// Styled components
import {
  Card,
  Background,
  BigTitle,
  DisplayOver,
  Hover,
  Description,
  Tech,
  Flex,
} from "../../components/styles/Portfolio/PortfolioCard.styled";

const PortfolioCard = ({
  project: { to, image, text, description, techNames },
}) => {
  // Render each tech name
  const RenderTechNames = () =>
    techNames.map((name, index) => <Tech key={index}>{name}</Tech>);

  return (
    <Card>
      <Background image={image}>
        <DisplayOver href={to} target="_blank" image={image}>
          <Hover>
            <Flex>
              <Description>{description}</Description>
              <RenderTechNames />
            </Flex>
          </Hover>
        </DisplayOver>
      </Background>
      <BigTitle>{text}</BigTitle>
    </Card>
  );
};

export default PortfolioCard;
