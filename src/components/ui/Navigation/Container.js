import React from "react";
import { Wrapper, MenuIconWrapper } from "../../styles/Navigation.styled";
import { internalLinks } from "../../../data/linkData";
import { NavLink } from ".";
import { HiMenu as MenuIcon, HiX as CloseIcon } from "react-icons/hi";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setNavMenuIsOpen } from "../../../features/ui/uiSlice";

const Container = ({ setMenuIsOpen }) => {
  const dispatch = useDispatch();
  const { navMenuIsOpen } = useSelector((state) => state.ui);

  // This dispatch is used several times in this component,
  // so a function was created in case a change needs to be made
  const dispatchMenuJob = () => dispatch(setNavMenuIsOpen());

  const RenderLinks = () => {
    return internalLinks.map((link, index) => (
      <NavLink key={index} link={link} onClick={() => dispatchMenuJob()} />
    ));
  };

  const Icon = () =>
    navMenuIsOpen ? (
      <CloseIcon onClick={(e) => dispatchMenuJob()} />
    ) : (
      <MenuIcon onClick={(e) => dispatchMenuJob()} />
    );

  return (
    <>
      <MenuIconWrapper>
        <Icon />
      </MenuIconWrapper>
      <Wrapper menuIsOpen={navMenuIsOpen}>
        <RenderLinks />
      </Wrapper>
    </>
  );
};

export default Container;
