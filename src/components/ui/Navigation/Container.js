import React from "react";
import { Wrapper } from "../../styles/Navigation.styled";
import { internalLinks } from "../../../data/linkData";
import { NavLink } from ".";

const Container = () => {
  const RenderLinks = () => {
    return internalLinks.map((link, index) => (
      <NavLink key={index} link={link} />
    ));
  };

  return (
    <Wrapper>
      <RenderLinks />
    </Wrapper>
  );
};

export default Container;
