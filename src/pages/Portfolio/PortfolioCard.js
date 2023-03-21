import React from "react";

// Styled components
import {
  CardCont,
  DescriptionCont,
  Image,
} from "../../components/styles/Portfolio/PortfolioCard.styled";

const PortfolioCard = ({
  project: { to, image, text, description, techNames },
}) => {
  return (
    <CardCont img={image}>
      <DescriptionCont>
        <h2>{text}</h2>
        <p>{description}</p>
        {techNames.map((each, index) => (
          <p key={index}>{each}</p>
        ))}
      </DescriptionCont>
    </CardCont>
  );
};

export default PortfolioCard;
