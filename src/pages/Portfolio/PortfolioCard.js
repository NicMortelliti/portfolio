import React from "react";
import { ProfessionalTag } from "../../components/styles/Link.styled";

// Styled components
import {
  CardCompany,
  CardContainer,
  CardDescription,
  CardIcon,
  CardTitle,
  CardTechNames,
  CardProf,
} from "../../components/styles/PortfolioCard.styled";

const PortfolioCard = ({
  project: { to, icon, text, description, techNames, professional },
}) => {
  // Render each tech name
  const renderTechNames = ({ techNames }) => (
    <div>
      {techNames.map((techNames, index) => {
        return <p key={index}>{techNames}</p>;
      })}
    </div>
  );

  // Conditionally display professional tag if data
  // item is labeld as a professional project
  const renderProfessionalTag = professional ? (
    <ProfessionalTag>Professional</ProfessionalTag>
  ) : null;

  return (
    <CardContainer href={to} target="_blank">
      <CardProf>{renderProfessionalTag}</CardProf>
      <CardIcon>{icon}</CardIcon>
      <CardCompany>
        <p>{professional}</p>
      </CardCompany>
      <CardTitle>
        <h1>{text}</h1>
      </CardTitle>
      <CardDescription>
        <p>{description}</p>
      </CardDescription>
      <CardTechNames>{() => renderTechNames(techNames)}</CardTechNames>
    </CardContainer>
  );
};

export default PortfolioCard;
