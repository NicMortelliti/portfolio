import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

// Styled components
import { NavLink as Link, NavLinkExtended as LinkExtended } from '../../styles/Buttons.styled';

// Redux
import { useDispatch } from 'react-redux';
import { setNavMenuIsOpen } from '../../../features/ui/uiSlice';

const NavLink = ({ link, extended, menu = false, stuck }) => {
  const dispatch = useDispatch();

  switch (extended) {
    case true:
      return (
        <LinkExtended as={RouterLink} to={link.to} onClick={() => dispatch(setNavMenuIsOpen(false))}>
          {link.text}
        </LinkExtended>
      );

    default:
      return (
        <Link as={RouterLink} to={link.to} menu={menu} stuck={stuck}>
          {link.text}
        </Link>
      );
  }
};

export default NavLink;
