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
  const renderTechNames = () =>
    techNames.map((name, index) => <p key={index}>{name}</p>);

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
            <CompanyName>{professional}</CompanyName>
            <Description>{description}</Description>
            <Tech>{renderTechNames()}</Tech>
            <RenderAttribution />
          </Hover>
          <CardProfOrPersonal isProfessional={professional}>
            {professional ? "Professional" : "Personal"}
          </CardProfOrPersonal>
        </DisplayOver>
      </Background>
      <BigTitle>{text}</BigTitle>
    </Card>
  );
};

export default PortfolioCard;
