import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import {
  NavLink as Link,
  NavLinkExtended as LinkExtended,
} from "../../styles/Buttons.styled";

const NavLink = ({ link, extended }) => {
  switch (extended) {
    case true:
      return (
        <LinkExtended as={RouterLink} to={link.to}>
          {link.text}
        </LinkExtended>
      );

    default:
      return (
        <Link as={RouterLink} to={link.to}>
          {link.text}
        </Link>
      );
  }
};

export default NavLink;
