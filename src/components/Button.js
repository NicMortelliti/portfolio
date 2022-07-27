import React from "react";

function Button({ url, value }) {
  const handleClick = () => {
    window.open(url);
  };

  return <button onClick={handleClick}>{value}</button>;
}

export default Button;
