import React from "react";

// Styled components
import {
  Card,
  Background,
  BigTitle,
  DisplayOver,
  CardProf,
  Hover,
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
        <BigTitle>{text}</BigTitle>
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
            <Paragraph>{description}</Paragraph>
            <Paragraph>{renderTechNames()}</Paragraph>
          </Hover>
        </DisplayOver>
      </Background>
    </Card>
  );
};

export default PortfolioCard;
