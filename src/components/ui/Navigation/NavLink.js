import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

// Styled components
import {
  NavLink as Link,
  NavLinkExtended as LinkExtended,
} from "../../styles/Buttons.styled";

// Redux
import { useDispatch } from "react-redux";
import { setNavMenuIsOpen } from "../../../features/ui/uiSlice";

const NavLink = ({ link, extended }) => {
  const dispatch = useDispatch();

  switch (extended) {
    case true:
      return (
        <LinkExtended
          as={RouterLink}
          to={link.to}
          onClick={() => dispatch(setNavMenuIsOpen())}>
          {link.text}
        </LinkExtended>
      );

    default:
      return (
        // The onClick action isn't totally necessary here, but in cases where
        // a user might open a nav menu in phone portrait mode, rotate to landscape,
        // navigate somewhere via the menu, then rotate back to portrait. If the onClick
        // is not handled, the mobile nav menu doesn't get closed.
        <Link
          as={RouterLink}
          to={link.to}
          onClick={() => dispatch(setNavMenuIsOpen())}>
          {link.text}
        </Link>
      );
  }
};

export default NavLink;
