import React from "react";
import { Link } from "../../styles/Link.styled";

const IconCard = ({ link: { to, icon, text } }) => {
  return (
    <Link href={to}>
      <h1 className="icon">{icon}</h1>
      <p className="desc">{text}</p>
    </Link>
  );
};

export default IconCard;
