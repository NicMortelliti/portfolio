import React from "react";

function Button({ url, value, ui }) {
  const handleClick = () => {
    window.open(url);
  };

  return (
    <button className={ui} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
