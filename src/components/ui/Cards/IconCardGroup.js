import React from "react";
import { LinkCont } from "../../styles/Link.styled";
import { IconCard } from "./index";

const IconCardGroup = ({ links }) => {
  return (
    <LinkCont columns>
      {links.map((link, index) => {
        return <IconCard key={index} link={link} />;
      })}
    </LinkCont>
  );
};

export default IconCardGroup;
