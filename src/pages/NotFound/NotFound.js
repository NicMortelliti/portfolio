import React from "react";
import { NavLink } from "react-router-dom";

// Styled components
import { Button } from "../../components/styles/Buttons.styled";

const NotFound = ({ setNotFound }) => {
  setNotFound(true);
  return (
    <>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <NavLink to="/">
        <Button>Go Home</Button>
      </NavLink>
    </>
  );
};

export default NotFound;
