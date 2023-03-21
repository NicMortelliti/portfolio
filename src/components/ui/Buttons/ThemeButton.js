import React from "react";
import { WiMoonAltFirstQuarter as Icon } from "react-icons/wi";

// Styled components
import { ThemeButton as Button } from "../../styles/Buttons.styled";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setDarkThemeActive,
  setThemeSwitcherHasBeenClicked,
} from "../../../features/ui/uiSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const { themeSwitcherHasBeenClicked } = useSelector((state) => state.ui);

  // Handle theme switcher click
  const handleClick = () => {
    dispatch(setDarkThemeActive());
    if (!themeSwitcherHasBeenClicked) {
      dispatch(setThemeSwitcherHasBeenClicked());
    }
  };

  return (
    <Button onClick={() => handleClick()}>
      <Icon />
    </Button>
  );
};

export default ThemeButton;
