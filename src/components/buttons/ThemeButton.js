import React from "react";
import { WiMoonAltFirstQuarter as Icon } from "react-icons/wi";

// Styled components
import { ThemeButton as Button } from "../styles/Buttons.styled";

const ThemeButton = ({ darkThemeIsSet, setDarkThemeIsSet }) => {
  // Handle theme change when button clicked
  const handleClick = (e) => {
    e.preventDefault();
    setDarkThemeIsSet(!darkThemeIsSet);
  };

  return (
    <Button onClick={(e) => handleClick(e)}>
      <Icon />
    </Button>
  );
};

export default ThemeButton;
