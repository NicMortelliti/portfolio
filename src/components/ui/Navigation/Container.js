import React from "react";
import { Wrapper } from "../../styles/Navigation.styled";
import { internalLinks } from "../../../data/linkData";
import { NavLink } from ".";
import { HiMenu as MenuIcon } from "react-icons/hi";

const Container = () => {
  const RenderLinks = () => {
    return internalLinks.map((link, index) => (
      <NavLink key={index} link={link} />
    ));
  };

  return (
    <Wrapper>
      <MenuIcon id="hamburger" />
      <RenderLinks />
    </Wrapper>
  );
};

export default Container;
