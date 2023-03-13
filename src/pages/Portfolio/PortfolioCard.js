import React from "react";

// Styled components
import {
  CardCompany,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
  CardTechNames,
  CardProf,
} from "../../components/styles/PortfolioCard.styled";

const PortfolioCard = ({
  project: { to, image, text, description, techNames, professional },
}) => {
  // Render each tech name
  const renderTechNames = () =>
    techNames.map((name, index) => <p key={index}>{name}</p>);

  return (
    <CardImage image={image}>
      <CardContainer href={to} target="_blank" image={image}>

        {/* Conditionally render the professional section */}
        {professional ? (
          <>
            <CardProf>Professional</CardProf>
            <CardCompany>
              <p>{professional}</p>
            </CardCompany>
          </>
        ) : null}

        <CardTitle>
          <h2>{text}</h2>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
        <CardTechNames>{renderTechNames()}</CardTechNames>
      </CardContainer>
    </CardImage>
  );
};

export default PortfolioCard;
