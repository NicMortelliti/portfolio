import React from "react";

// Styled components
import {
  Attribution,
  Card,
  Background,
  BigTitle,
  DisplayOver,
  CardProfOrPersonal,
  Hover,
  Description,
  CompanyName,
  Tech,
  Top,
  Bottom,
  Flex,
} from "../../components/styles/Portfolio/PortfolioCard.styled";

const PortfolioCard = ({
  project: {
    to,
    image,
    text,
    description,
    techNames,
    professional,
    attribution,
  },
}) => {
  // Render each tech name
  const RenderTechNames = () =>
    techNames.map((name, index) => <Tech key={index}>{name}</Tech>);

  const RenderAttribution = () => {
    if (attribution) {
      return (
        <Attribution href={attribution.url}>
          Image Credit: {attribution.site}/{attribution.author}
        </Attribution>
      );
    }
  };

  return (
    <Card>
      <Background image={image}>
        <DisplayOver href={to} target="_blank" image={image}>
          <Hover>
            <Flex>
              <Top>
                <CompanyName>{professional ? professional : null}</CompanyName>
                <Description>{description}</Description>
                <RenderTechNames />
              </Top>
              <RenderAttribution />
            </Flex>
          </Hover>
          <Bottom>
            <CardProfOrPersonal isProfessional={professional}>
              {professional ? "Professional" : "Personal"}
            </CardProfOrPersonal>
          </Bottom>
        </DisplayOver>
      </Background>
      <BigTitle>{text}</BigTitle>
    </Card>
  );
};

export default PortfolioCard;
