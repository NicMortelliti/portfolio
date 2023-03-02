import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

// Styled components
// import { NavLink as Link } from "../../styles/Navigation.styled";
import { Link } from "../../styles/Buttons.styled";

const NavLink = ({ link, setMenuIsOpen }) => {
  return (
    <Link as={RouterLink} to={link.to} onClick={() => setMenuIsOpen(false)}>
      {link.text}
    </Link>
  );
};

export default NavLink;
