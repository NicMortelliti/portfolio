import React from "react";

// Styled components
import {
  Card,
  Background,
  BigTitle,
  DisplayOver,
  CardProf,
  Hover,
  Description,
  Paragraph,
} from "../../components/styles/PortfolioCard.styled";

const PortfolioCard = ({
  project: { to, image, text, description, techNames, professional },
}) => {
  // Render each tech name
  const renderTechNames = () =>
    techNames.map((name, index) => <p key={index}>{name}</p>);

  return (
    <Card>
      <Background image={image}>
        {/* Conditionally render the professional section */}
        {professional ? (
          <>
            <CardProf>Professional</CardProf>
            <Hover>
              <Paragraph>{professional}</Paragraph>
            </Hover>
          </>
        ) : null}
        <DisplayOver href={to} target="_blank" image={image}>
          <Hover>
            <Description>{description}</Description>
            <Paragraph>{renderTechNames()}</Paragraph>
          </Hover>
        </DisplayOver>
      </Background>
      <BigTitle>{text}</BigTitle>
    </Card>
  );
};

export default PortfolioCard;
