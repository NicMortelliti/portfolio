import React from "react";

import Button from "./Button";

function PortfolioCard({ cardData }) {
  return (
    <div>
      <p>{cardData.title}</p>
      <Button url={cardData.demoURL} value="Demo" />
      <Button url={cardData.ghURL} value="Github" />
      <p>{cardData.blurb}</p>
      <img src={cardData.img} alt={cardData.title} />
    </div>
  );
}

export default PortfolioCard;
