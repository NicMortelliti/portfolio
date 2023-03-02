import React, { useState } from "react";
import { Wrapper } from "../../styles/Navigation.styled";
import { internalLinks } from "../../../data/linkData";
import { NavLink } from ".";
import { HiMenu as MenuIcon, HiX as CloseIcon } from "react-icons/hi";

const Container = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const RenderLinks = () => {
    return internalLinks.map((link, index) => (
      <NavLink key={index} link={link} />
    ));
  };

  const Icon = () =>
    menuIsOpen ? (
      <CloseIcon id="hamburger" onClick={(e) => handleMenuClick(e)} />
    ) : (
      <MenuIcon id="hamburger" onClick={(e) => handleMenuClick(e)} />
    );

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Wrapper menuIsOpen={menuIsOpen}>
      <Icon />
      <RenderLinks />
    </Wrapper>
  );
};

export default Container;
