import React from "react";

// Styled components
import {
  ProjectCard,
  ProjectContent,
} from "../../components/styles/Portfolio/PortfolioCard.styled";

const PortfolioCard = ({
  project: { to, image, text, description, techNames },
}) => {
  return (
    <ProjectCard>
      <ProjectContent>
        <p>{description}</p>
        <img src={image} alt="landing page" />
      </ProjectContent>
    </ProjectCard>
  );
};

export default PortfolioCard;
