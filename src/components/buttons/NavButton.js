import React from "react";

import { NavButton as Button } from "../styles/Buttons.styled";

const NavButton = ({ url, text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url);
  };

  return <Button onClick={(e) => handleClick(e)}>{text}</Button>;
};

export default NavButton;
