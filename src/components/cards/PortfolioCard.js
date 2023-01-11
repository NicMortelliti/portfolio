import React from "react";

import Button from "../buttons/Button";

function PortfolioCard({ cardData }) {
  return (
    <div className="p-card">
      <p>{cardData.title}</p>
      <Button url={cardData.demoURL} value="Demo" />
      <Button url={cardData.ghURL} value="Github" />
      <p>{cardData.blurb}</p>
    </div>
  );
}

export default PortfolioCard;
