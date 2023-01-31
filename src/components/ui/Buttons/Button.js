import React from "react";

import { Button as Btn } from "../styles/Buttons.styled";

function Button({ url, value, ui }) {
  const handleClick = () => {
    window.open(url);
  };

  return (
    <Btn className={ui} onClick={handleClick}>
      {value}
    </Btn>
  );
}

export default Button;
