import React from "react";
import { Wrapper, MenuIconWrapper } from "../../styles/Navigation.styled";
import { internalLinks } from "../../../data/linkData";
import { NavLink } from ".";
import { HiMenu as MenuIcon, HiX as CloseIcon } from "react-icons/hi";

const Container = ({ menuIsOpen, setMenuIsOpen }) => {
  const RenderLinks = () => {
    return internalLinks.map((link, index) => (
      <NavLink key={index} link={link} setMenuIsOpen={setMenuIsOpen} />
    ));
  };

  const Icon = () =>
    menuIsOpen ? (
      <CloseIcon onClick={(e) => handleMenuClick(e)} />
    ) : (
      <MenuIcon onClick={(e) => handleMenuClick(e)} />
    );

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <MenuIconWrapper>
        <Icon />
      </MenuIconWrapper>
      <Wrapper menuIsOpen={menuIsOpen}>
        <RenderLinks />
      </Wrapper>
    </>
  );
};

export default Container;
