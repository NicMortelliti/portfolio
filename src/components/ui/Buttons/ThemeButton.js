import React from "react";
import { WiMoonAltFirstQuarter as Icon } from "react-icons/wi";

// Styled components
import { ThemeButton as Button } from "../../styles/Buttons.styled";

// Redux
import { useDispatch } from "react-redux";
import { setDarkThemeActive } from "../../../features/ui/uiSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={(e) => dispatch(setDarkThemeActive())}>
      <Icon />
    </Button>
  );
};

export default ThemeButton;
