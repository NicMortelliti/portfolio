import React from "react";

function PortfolioCard({ cardData }) {

  return (
    <div>
      <p>{cardData.demoURL}</p>
      <p>{cardData.ghURL}</p>
      <p>{cardData.title}</p>
      <p>{cardData.blurb}</p>
      <img src={cardData.img} alt={cardData.title} />
    </div>
  );
}

export default PortfolioCard;
